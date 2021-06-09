document.addEventListener('deviceready', () => {
    document.getElementById("formulario").style.display = "none";
    document.getElementById("spinner").style.display = "none";

    // Create data capture context using your license key.
    const context = Scandit.DataCaptureContext.forLicenseKey('AY8AXgp6KovoFAi+7SRf9zE00QOpMvmJYVu3baNxzZjSJSZItXFe0nVVAd/6BUxDERlS0XhB46gQbrXj+iyZdggGHU/RbjaZjDvTpH0teAygaroHpGh2grhSEwl5QqmM5gi2M6ImgxNHXKPzGkTal34DwxsIUCiX2Fa7tP1vY7Xaafe0Hn1HHiIZP87sQOtnUxesKFoikEjRb9cFSlQDRs5yKIIVSdQL2XRH3+9YOzEtdHI0WnrLvktW895oa0qdlXSHFt9z8dngdSqPZQCaAIYJp/QBYyQ09lJXrP5xDkagQ95pqXGG7vRD5tQ9clk0IENb9GtxLSo4dwbr8y9hiwdGFnBMU3it0X79PCF5fIaZSTAywELByS1xCEFGGpHAB0lXqBgNdpCidyRYZw1hKR9yOgK3XhKg4VYB00gDIX1BWUYMLiNWg4lbt0usa9jNrirFegdiIkUfYOnMG1MC1rdsigxif5kArHdOE3InGMSja1jtKCqDFj1fZvGAayAlJ1vughsj8Ss5T5TUk3L/SFlfxu6fZuhwdCfE1RHHvn5zQHtISQYG41RMZJjWPdmnp2+FWfcsObzb19rcrHeflUL00N0H1ljgq/s8oSBRUSOrsgRBL0P8E3uqxN1l6Mj459TKkzaI8LVhLZFzjYBFpcbQHQucwT+I5uY7Q5M7oPPu36+DVPLMyGGLV+eligcsfRZMgiG6yIVBhai1Lasqe9+fJi4KRlPcCrFJ5BQvDqW3tGKdYGQ4XguKkYyhCrY4YiyrfqQFTGuhLsUcDcH/+JKSgXxEG78++YTI2LfOQgPHiZcNuUN0YmUqNOMU/2qESIwalGhC40Q8u9xbfkhOzJmnSKxYBGAFZtt7qIELKK4OyfN1r5E8MZj5vmaN0xgex9mN1fUqDFusocYJNY2amKrKxqSaZ+xPCl7RQe+sJ+y9zSkui1jq99otYNPVLydG5yv0QH3H22ZPT/uPynv6t2FiiGKrkwsrK+Vpxfvt9uZA33DI4VgjK2sl4tWXyb8c0G/wq7FqKneDKFxH0rZ/91Gfz5nphDfjxmNYvejlv7xxO0kQzTMPsxysMEN63fsOZHG8HZTdecGeqw4rgppm7KjYf2aFbaoicADl3rL87ar7895xDiNkeykCFvwtiJtyej5HDIbm79Bph4LC1slhFqE4m7S8tsVhlZEU5+lSCfc57yp7SZ5zjqdJOcnWXk0rl2d6zABy9TAOBrNT');

    // Use the world-facing (back) camera and set it as the frame source of the context. The camera is off by
    // default and must be turned on to start streaming frames to the data capture context for recognition.
    const camera = Scandit.Camera.default;
    context.setFrameSource(camera);

    // Use the recommended camera settings for the IdCapture mode.
    camera.applySettings(Scandit.IdCapture.recommendedCameraSettings);

    // The ID capturing process is configured through ID capture settings
    // and are then applied to the ID capture instance that manages id recognition.
    const settings = new Scandit.IdCaptureSettings();

    // We are interested in the front side of national Id Cards and passports using MRZ.
    settings.supportedDocuments = [
        Scandit.IdDocumentType.IdCardMRZ
    ]

    // To visualize the on-going id capturing process on screen, setup a data capture view that renders the
    // camera preview. The view must be connected to the data capture context.
    const view = Scandit.DataCaptureView.forContext(context);

    // Connect the data capture view to the HTML element, so it can fill up its size and follow its position.
    view.connectToElement(document.getElementById('data-capture-view'));

    // Switch camera on to start streaming frames and enable the id capture mode.
    // The camera is started asynchronously and will take some time to completely turn on.
    camera.switchToDesiredState(Scandit.FrameSourceState.On);

    // Create new id capture mode with the settings from above.
    window.idCapture = Scandit.IdCapture.forContext(context, settings);

    // Register a listener to get informed whenever a new id got recognized.
    window.idCapture.addListener({
        didCaptureId: (_, session) => {
            if (session.newlyCapturedId == null) {
                return
            }

            window.idCapture.isEnabled = false;

            if (session.newlyCapturedId.mrzResult != null) {
                window.showResult(session.newlyCapturedId);
            } else if (session.newlyCapturedId.vizResult != null) {
                window.showResult(window.descriptionForVizResult(session.newlyCapturedId));
            } else if (session.newlyCapturedId.aamvaBarcodeResult != null) {
                window.showResult(window.descriptionForUsDriverLicenseBarcodeResult(session.newlyCapturedId));
            } else if (session.newlyCapturedId.usUniformedServicesBarcodeResult != null) {
                window.showResult(window.descriptionForUsUniformedServicesBarcodeResult(session.newlyCapturedId));
            }
        },
        didFailWithError: (_, error, session) => {
            window.showResult(error.message);
        }
    });

    window.idCapture.isEnabled = true;

    window.idCaptureOverlay = Scandit.IdCaptureOverlay.withIdCaptureForView(window.idCapture, view);

    window.idCaptureOverlay.viewfinder = new Scandit.RectangularViewfinder(
        Scandit.RectangularViewfinderStyle.Square,
        Scandit.RectangularViewfinderLineStyle.Light,
    );
}, false);

window.showResult = result => {
    document.getElementById("data-capture-view").style.display = "none";
    document.getElementById("formulario").style.display = "block";
    const camera = Scandit.Camera.default;
    camera.switchToDesiredState(Scandit.FrameSourceState.Stopping);
    const resultElement = document.createElement('div');
    resultElement.id = "result";
    resultElement.classList = "result";
    // resultElement.innerHTML = `<p>${result}</p><button onclick="continueScanning()">OK</button>`;
    document.querySelector('#formulario').appendChild(resultElement);
    console.log('Resultado', result)
    document.getElementById("nombre").value = `${result.firstName || "empty"}`;
    document.getElementById("label-nombre").className = "label active";
    document.getElementById("apellido-paterno").value = `${result.lastName.split(' ')[0] || "empty"}`;
    document.getElementById("label-apellido-paterno").className = "label active";
    document.getElementById("apellido-materno").value = `${result.lastName.split(" ").slice(1) || "empty"}`;
    document.getElementById("label-apellido-materno").className = "label active";
    document.getElementById("pasaporte").value = `${result.documentNumber || "empty"}`;
    document.getElementById("label-pasaporte").className = "label active";
    /* document.getElementById("genero").value = `${result.sex || "empty"}`; */
    /* document.getElementById("label-genero").className = "label active"; */
    document.getElementById("nacionalidad").value = `${result.issuingCountry || "empty"}`;
    document.getElementById("label-nacionalidad").className = "label active";
    let fcadena = {}
    fcadena = result.dateOfBirth.json
    if (fcadena.month < 10) { fcadena.month = "0" + fcadena.month.toString() }
    if (fcadena.day < 10) { fcadena.day = "0" + fcadena.day.toString() }
    /* let fecha = Object.values(result.dateOfBirth.json).reverse().join().replace(/,/g, "-") */
    let fecha = Object.values(fcadena).reverse().join().replace(/,/g, "-")
    console.log('fecha', fecha);
    document.getElementById("nacimiento").value = `${fecha || "empty"}`;
    document.getElementById("label-nacimiento").className = "label active";
}

window.sendData = () => {
    document.getElementById("spinner").style.display = "block";
    document.getElementById("formulario").style.display = "none";

    setTimeout(function() {
        document.getElementById("spinner").style.display = "none";

        const options = {
            method: 'post',
            data: {
                    action: "registrar",
                    lastName: "Lopez",
                    name: "Daniel3",
                    MlastName: "Lopez",
                    id: "78787878",
                    gender: "female",
                    nationality: "mex",
                    date: "1995-05-27",
                    email: "daniel3@gmail.com",
                    phone: "45455476848"
                },
            headers: { urlencoded: "application/x-www-form-urlencoded" }
            };

            cordova.plugin.http.sendRequest('https://microlab.mx/amatis21qroo/interfaces/registromovil.php', options, function(response) {
            // prints 200
            console.log(response.status);
            }, function(response) {
            // prints 403
            console.log(response.status);

            //prints Permission denied
            console.log(response.error);
        });

        document.getElementById("data-capture-view").style.display = "block";
        window.idCapture.isEnabled = true;
    }, 5000);
}

window.continueScanning = () => {
    document.getElementById("spinner").style.display = "block";
    document.getElementById("formulario").style.display = "none";

    setTimeout(function() {
        document.getElementById("spinner").style.display = "none";
        document.getElementById("data-capture-view").style.display = "block";
        // document.querySelector('#result').parentElement.removeChild(document.querySelector('#result'))
        window.idCapture.isEnabled = true;
    }, 3000);

}

// === //

window.descriptionForMrzResult = (result) => {
    return `
  ${descriptionForCapturedId(result)}<br><br>
  Document Code: ${result.mrzResult.documentCode}<br>
  Names Are Truncated: ${result.mrzResult.namesAreTruncated ? "Yes" : "No"}<br>
  Optional: ${result.mrzResult.optional || "empty"}<br>
  Optional 1: ${result.mrzResult.optional1 || "empty"}<br>
  `
}

window.descriptionForVizResult = (result) => {
    return `
  ${descriptionForCapturedId(result)}<br><br>
  Additional Name Information: ${result.vizResult.additionalNameInformation || "empty"}<br>
  Additional Address Information: ${result.vizResult.additionalAddressInformation || "empty"}<br>
  Place of Birth: ${result.vizResult.placeOfBirth || "empty"}<br>
  Race: ${result.vizResult.race || "empty"}<br>
  Religion: ${result.vizResult.religion || "empty"}<br>
  Profession: ${result.vizResult.profession || "empty"}<br>
  Marital Status: ${result.vizResult.maritalStatus || "empty"}<br>
  Residential Status: ${result.vizResult.residentialStatus || "empty"}<br>
  Employer: ${result.vizResult.employer || "empty"}<br>
  Personal Id Number: ${result.vizResult.personalIdNumber || "empty"}<br>
  Document Additional Number: ${result.vizResult.documentAdditionalNumber || "empty"}<br>
  Issuing Jurisdiction: ${result.vizResult.issuingJurisdiction || "empty"}<br>
  Issuing Authority: ${result.vizResult.issuingAuthority || "empty"}<br>
  `
}

window.descriptionForUsDriverLicenseBarcodeResult = (result) => {
    return `
  ${descriptionForCapturedId(result)}<br><br>
  AAMVA Version: ${result.aamvaBarcodeResult.aamvaVersion}<br>
  Jurisdiction Version: ${result.aamvaBarcodeResult.jurisdictionVersion}<br>
  IIN: ${result.aamvaBarcodeResult.iIN}<br>
  Issuing Jurisdiction: ${result.aamvaBarcodeResult.issuingJurisdiction}<br>
  Issuing Jurisdiction ISO: ${result.aamvaBarcodeResult.issuingJurisdictionISO}<br>
  Eye Color: ${result.aamvaBarcodeResult.eyeColor || "empty"}<br>
  Hair Color: ${result.aamvaBarcodeResult.hairColor || "empty"}<br>
  Height Inch: ${result.aamvaBarcodeResult.heightInch || 0}<br>
  Height Cm: ${result.aamvaBarcodeResult.heightCm || 0}<br>
  Weight Lb: ${result.aamvaBarcodeResult.weightLbs || 0}<br>
  Weight Kg: ${result.aamvaBarcodeResult.weightKg || 0}<br>
  Place of Birth: ${result.aamvaBarcodeResult.placeOfBirth || "empty"}<br>
  Race: ${result.aamvaBarcodeResult.race || "empty"}<br>
  Document Discriminator Number: ${result.aamvaBarcodeResult.documentDiscriminatorNumber || "empty"}<br>
  Vehicle Class: ${result.aamvaBarcodeResult.vehicleClass || "empty"}<br>
  Restrictions Code: ${result.aamvaBarcodeResult.restrictionsCode || "empty"}<br>
  Endorsements Code: ${result.aamvaBarcodeResult.endorsementsCode || "empty"}<br>
  Card Revision Date: ${JSON.stringify(result.aamvaBarcodeResult.cardRevisionDate.date) || "empty"}<br>
  Middle Name: ${result.aamvaBarcodeResult.middleName || "empty"}<br>
  Driver Name Suffix: ${result.aamvaBarcodeResult.driverNameSuffix || "empty"}<br>
  Driver Name Prefix: ${result.aamvaBarcodeResult.driverNamePrefix || "empty"}<br>
  Last Name Truncation: ${result.aamvaBarcodeResult.lastNameTruncation || "empty"}<br>
  First Name Truncation: ${result.aamvaBarcodeResult.firstNameTruncation || "empty"}<br>
  Middle Name Truncation: ${result.aamvaBarcodeResult.middleNameTruncation || "empty"}<br>
  Alias Family Name: ${result.aamvaBarcodeResult.aliasFamilyName || "empty"}<br>
  Alias Given Name: ${result.aamvaBarcodeResult.aliasGivenName || "empty"}<br>
  Alias Suffix Name: ${result.aamvaBarcodeResult.aliasSuffixName || "empty"}<br>
  `
}

window.descriptionForUsUniformedServicesBarcodeResult = (result) => {
    return `
  ${descriptionForCapturedId(result)}<br><br>
  Version: ${result.usUniformedServicesBarcodeResult.version}<br>
  Sponsor Flag: ${result.usUniformedServicesBarcodeResult.sponsorFlag}<br>
  Person Designator Document: ${result.usUniformedServicesBarcodeResult.personDesignatorDocument}<br>
  Family Sequence Number: ${result.usUniformedServicesBarcodeResult.familySequenceNumber}<br>
  Deers Dependent Suffix Code: ${result.usUniformedServicesBarcodeResult.deersDependentSuffixCode}<br>
  Deers Dependent Suffix Description: ${result.usUniformedServicesBarcodeResult.deersDependentSuffixDescription}<br>
  Height: ${result.usUniformedServicesBarcodeResult.height}<br>
  Weight: ${result.usUniformedServicesBarcodeResult.weight}<br>
  Hair Color: ${result.usUniformedServicesBarcodeResult.hairColor}<br>
  Eye Color: ${result.usUniformedServicesBarcodeResult.eyeColor}<br>
  Direct Care Flag Code: ${result.usUniformedServicesBarcodeResult.directCareFlagCode}<br>
  Direct Care Flag Description: ${result.usUniformedServicesBarcodeResult.directCareFlagDescription}<br>
  Civilian Health Care Flag Code: ${result.usUniformedServicesBarcodeResult.civilianHealthCareFlagCode}<br>
  Civilian Health Care Flag Description: ${result.usUniformedServicesBarcodeResult.civilianHealthCareFlagDescription}<br>
  Commissary Flag Code: ${result.usUniformedServicesBarcodeResult.commissaryFlagCode}<br>
  Commissary Flag Description: ${result.usUniformedServicesBarcodeResult.commissaryFlagDescription}<br>
  MWR Flag Code: ${result.usUniformedServicesBarcodeResult.mwrFlagCode}<br>
  MWR Flag Description: ${result.usUniformedServicesBarcodeResult.mwrFlagDescription}<br>
  Exchange Flag Code: ${result.usUniformedServicesBarcodeResult.exchangeFlagCode}<br>
  Exchange Flag Description: ${result.usUniformedServicesBarcodeResult.exchangeFlagDescription}<br>
  Champus Effective Date: ${JSON.stringify(result.usUniformedServicesBarcodeResult.champusEffectiveDate.date) || "empty"}<br>
  Champus Expiry Date: ${JSON.stringify(result.usUniformedServicesBarcodeResult.champusExpiryDate.date) || "empty"}<br>
  Form Number: ${result.usUniformedServicesBarcodeResult.formNumber}<br>
  Security Code: ${result.usUniformedServicesBarcodeResult.securityCode}<br>
  Service Code: ${result.usUniformedServicesBarcodeResult.serviceCode}<br>
  Status Code: ${result.usUniformedServicesBarcodeResult.statusCode}<br>
  Status Code Description: ${result.usUniformedServicesBarcodeResult.statusCodeDescription}<br>
  Branch Of Service: ${result.usUniformedServicesBarcodeResult.branchOfService}<br>
  Rank: ${result.usUniformedServicesBarcodeResult.rank}<br>
  Pay Grade: ${result.usUniformedServicesBarcodeResult.payGrade}<br>
  Sponsor Name: ${result.usUniformedServicesBarcodeResult.sponsorName || "empty"}<br>
  Sponsor Person Designator Identifier: ${result.usUniformedServicesBarcodeResult.sponsorPersonDesignatorIdentifier || 0}<br>
  Relationship Code: ${result.usUniformedServicesBarcodeResult.relationshipCode || "empty"}<br>
  Relationship Description: ${result.usUniformedServicesBarcodeResult.relationshipDescription || "empty"}<br>
  Geneva Convention Category: ${result.usUniformedServicesBarcodeResult.genevaConventionCategory || "empty"}<br>
  Blood Type: ${result.usUniformedServicesBarcodeResult.bloodType || "empty"}<br>
  `
}

window.descriptionForCapturedId = (result) => {
    return `
  Name: ${result.firstName || "empty"}<br>
  Last Name: ${result.lastName || "empty"}<br>
  Full Name: ${result.fullName}<br>
  Sex: ${result.sex || "empty"}<br>
  Date of Birth: ${JSON.stringify(result.dateOfBirth && result.dateOfBirth.date) || "empty"}<br>
  Nationality: ${result.nationality || "empty"}<br>
  Address: ${result.address || "empty"}<br>
  Document Type: ${result.documentType}<br>
  Captured Result Type: ${result.capturedResultType}<br>
  Issuing Country: ${result.issuingCountry || "empty"}<br>
  Issuing Country ISO: ${result.issuingCountryISO || "empty"}<br>
  Document Number: ${result.documentNumber || "empty"}<br>
  Date of Expiry: ${JSON.stringify(result.dateOfExpiry && result.dateOfExpiry.date) || "empty"}<br>
  Date of Issue: ${JSON.stringify(result.dateOfIssue && result.dateOfIssue.date) || "empty"}<br>
  `
}
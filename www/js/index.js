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

    document.getElementById("nacionalidad").value = `${result.issuingCountry || "empty"}`;
    document.getElementById("label-nacionalidad").className = "label active";
    let fcadena = {}
    fcadena = result.dateOfBirth.json
    if (fcadena.month < 10) { fcadena.month = "0" + fcadena.month.toString() }
    if (fcadena.day < 10) { fcadena.day = "0" + fcadena.day.toString() }

    let fecha = Object.values(fcadena).reverse().join().replace(/,/g, "-")

    document.getElementById("nacimiento").value = `${fecha || "empty"}`;
    document.getElementById("label-nacimiento").className = "label active";
}


// window.sendData = () => {
//     document.getElementById("spinner").style.display = "block";
//     document.getElementById("formulario").style.display = "none";

//     const lastName = document.getElementById("apellido-paterno").value;
//     const name = document.getElementById("apellido-paterno").value;
//     const MlastName = document.getElementById("apellido-materno").value;
//     const id = document.getElementById("pasaporte").value;
//     const gender = document.getElementById("genero").value;
//     const nationality = document.getElementById("nacionalidad").value;
//     const date = document.getElementById("nacimiento").value;
//     const email = document.getElementById("correo").value;
//     const phone = document.getElementById("telefono").value;

//     setTimeout(function() {
//         document.getElementById("spinner").style.display = "none";

//         const options = {
//             method: 'post',
//             data: {
//                 action: "registrar",
//                 lastName: lastName,
//                 name: name,
//                 MlastName: MlastName,
//                 id: id,
//                 gender: gender,
//                 nationality: nationality,
//                 date: date,
//                 email: email,
//                 phone: phone
//             },
//             headers: { urlencoded: "application/x-www-form-urlencoded" }
//         };

//         cordova.plugin.http.sendRequest('https://microlab.mx/amatis21qroo/interfaces/registromovil.php', options, function(response) {
//             // prints 200
//             console.log(response.status);
//         }, function(response) {
//             // prints 403
//             console.log(response.status);

//             //prints Permission denied
//             console.log(response.error);
//         });


//         document.getElementById("data-capture-view").style.display = "block";
//         window.idCapture.isEnabled = true;
//     }, 5000);

// }

window.sendData = () => {
    document.getElementById("spinner").style.display = "block";
    document.getElementById("formulario").style.display = "none";

    setTimeout(function() {

        const options = {
            method: 'post',
            data: {
                action: "registrar",
                lastName: document.getElementById("apellido-paterno").value,
                name: document.getElementById("nombre").valu,
                MlastName: document.getElementById("apellido-materno").value,
                id: document.getElementById("pasaporte").value,
                gender: "empty",
                nationality: document.getElementById("nacionalidad").value,
                date: document.getElementById("nacimiento").value,
                email: "ejemplo@correo.com",
                phone: "4778484884"
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
    }, 7000);
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
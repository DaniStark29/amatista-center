cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-file.DirectoryEntry",
      "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryReader",
      "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryReader"
      ]
    },
    {
      "id": "cordova-plugin-file.Entry",
      "file": "plugins/cordova-plugin-file/www/Entry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Entry"
      ]
    },
    {
      "id": "cordova-plugin-file.File",
      "file": "plugins/cordova-plugin-file/www/File.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.File"
      ]
    },
    {
      "id": "cordova-plugin-file.FileEntry",
      "file": "plugins/cordova-plugin-file/www/FileEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.FileError",
      "file": "plugins/cordova-plugin-file/www/FileError.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileError"
      ]
    },
    {
      "id": "cordova-plugin-file.FileReader",
      "file": "plugins/cordova-plugin-file/www/FileReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileReader"
      ]
    },
    {
      "id": "cordova-plugin-file.FileSystem",
      "file": "plugins/cordova-plugin-file/www/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadOptions",
      "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadOptions"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadResult",
      "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadResult"
      ]
    },
    {
      "id": "cordova-plugin-file.FileWriter",
      "file": "plugins/cordova-plugin-file/www/FileWriter.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileWriter"
      ]
    },
    {
      "id": "cordova-plugin-file.Flags",
      "file": "plugins/cordova-plugin-file/www/Flags.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Flags"
      ]
    },
    {
      "id": "cordova-plugin-file.LocalFileSystem",
      "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.LocalFileSystem"
      ],
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.Metadata",
      "file": "plugins/cordova-plugin-file/www/Metadata.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Metadata"
      ]
    },
    {
      "id": "cordova-plugin-file.ProgressEvent",
      "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.ProgressEvent"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems",
      "file": "plugins/cordova-plugin-file/www/fileSystems.js",
      "pluginId": "cordova-plugin-file"
    },
    {
      "id": "cordova-plugin-file.requestFileSystem",
      "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.requestFileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.resolveLocalFileSystemURI",
      "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.isChrome",
      "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.androidFileSystem",
      "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems-roots",
      "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.fileSystemPaths",
      "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "cordova"
      ],
      "runs": true
    },
    {
      "id": "cordova-plugin-advanced-http.cookie-handler",
      "file": "plugins/cordova-plugin-advanced-http/www/cookie-handler.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.dependency-validator",
      "file": "plugins/cordova-plugin-advanced-http/www/dependency-validator.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.error-codes",
      "file": "plugins/cordova-plugin-advanced-http/www/error-codes.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.global-configs",
      "file": "plugins/cordova-plugin-advanced-http/www/global-configs.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.helpers",
      "file": "plugins/cordova-plugin-advanced-http/www/helpers.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.js-util",
      "file": "plugins/cordova-plugin-advanced-http/www/js-util.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.local-storage-store",
      "file": "plugins/cordova-plugin-advanced-http/www/local-storage-store.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.lodash",
      "file": "plugins/cordova-plugin-advanced-http/www/lodash.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.messages",
      "file": "plugins/cordova-plugin-advanced-http/www/messages.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.ponyfills",
      "file": "plugins/cordova-plugin-advanced-http/www/ponyfills.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.public-interface",
      "file": "plugins/cordova-plugin-advanced-http/www/public-interface.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.tough-cookie",
      "file": "plugins/cordova-plugin-advanced-http/www/umd-tough-cookie.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.url-util",
      "file": "plugins/cordova-plugin-advanced-http/www/url-util.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.http",
      "file": "plugins/cordova-plugin-advanced-http/www/advanced-http.js",
      "pluginId": "cordova-plugin-advanced-http",
      "clobbers": [
        "cordova.plugin.http"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.CommonCordova",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Cordova/CommonCordova.js",
      "pluginId": "scandit-cordova-datacapture-core"
    },
    {
      "id": "scandit-cordova-datacapture-core.Defaults",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Cordova/Defaults.js",
      "pluginId": "scandit-cordova-datacapture-core"
    },
    {
      "id": "scandit-cordova-datacapture-core.Cordova",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Cordova/Cordova.js",
      "pluginId": "scandit-cordova-datacapture-core"
    },
    {
      "id": "scandit-cordova-datacapture-core.DataCaptureContextProxy",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Cordova/DataCaptureContextProxy.js",
      "pluginId": "scandit-cordova-datacapture-core"
    },
    {
      "id": "scandit-cordova-datacapture-core.DataCaptureViewProxy",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Cordova/DataCaptureViewProxy.js",
      "pluginId": "scandit-cordova-datacapture-core"
    },
    {
      "id": "scandit-cordova-datacapture-core.CameraProxy",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Cordova/CameraProxy.js",
      "pluginId": "scandit-cordova-datacapture-core"
    },
    {
      "id": "scandit-cordova-datacapture-core.FeedbackProxy",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Cordova/FeedbackProxy.js",
      "pluginId": "scandit-cordova-datacapture-core"
    },
    {
      "id": "scandit-cordova-datacapture-core.VolumeButtonObserverProxy",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Cordova/VolumeButtonObserverProxy.js",
      "pluginId": "scandit-cordova-datacapture-core"
    },
    {
      "id": "scandit-cordova-datacapture-core.Camera",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Camera.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.Camera+Related",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Camera+Related.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.Common",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Common.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.DataCaptureContext",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/DataCaptureContext.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.DataCaptureContext+Related",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/DataCaptureContext+Related.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.DataCaptureView",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/DataCaptureView.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.DataCaptureView+Related",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/DataCaptureView+Related.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.Serializeable",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Serializeable.js",
      "pluginId": "scandit-cordova-datacapture-core"
    },
    {
      "id": "scandit-cordova-datacapture-core.LocationSelection",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/LocationSelection.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.Viewfinder",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Viewfinder.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.Viewfinder+Related",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Viewfinder+Related.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.Feedback",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Feedback.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.DataCaptureVersion",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/DataCaptureVersion.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.VolumeButtonObserver",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/VolumeButtonObserver.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-id.Cordova",
      "file": "plugins/scandit-cordova-datacapture-id/www/js/Cordova/Cordova.js",
      "pluginId": "scandit-cordova-datacapture-id"
    },
    {
      "id": "scandit-cordova-datacapture-id.Defaults",
      "file": "plugins/scandit-cordova-datacapture-id/www/js/Cordova/Defaults.js",
      "pluginId": "scandit-cordova-datacapture-id"
    },
    {
      "id": "scandit-cordova-datacapture-id.IdCaptureProxy",
      "file": "plugins/scandit-cordova-datacapture-id/www/js/Cordova/IdCaptureProxy.js",
      "pluginId": "scandit-cordova-datacapture-id"
    },
    {
      "id": "scandit-cordova-datacapture-id.IdCaptureListenerProxy",
      "file": "plugins/scandit-cordova-datacapture-id/www/js/Cordova/IdCaptureListenerProxy.js",
      "pluginId": "scandit-cordova-datacapture-id"
    },
    {
      "id": "scandit-cordova-datacapture-id.SerializedTypes",
      "file": "plugins/scandit-cordova-datacapture-id/www/js/Cordova/SerializedTypes.js",
      "pluginId": "scandit-cordova-datacapture-id"
    },
    {
      "id": "scandit-cordova-datacapture-id.CapturedId",
      "file": "plugins/scandit-cordova-datacapture-id/www/js/CapturedId.js",
      "pluginId": "scandit-cordova-datacapture-id",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-id.Enums",
      "file": "plugins/scandit-cordova-datacapture-id/www/js/Enums.js",
      "pluginId": "scandit-cordova-datacapture-id",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-id.IdCapture",
      "file": "plugins/scandit-cordova-datacapture-id/www/js/IdCapture.js",
      "pluginId": "scandit-cordova-datacapture-id",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-id.IdCapture+Related",
      "file": "plugins/scandit-cordova-datacapture-id/www/js/IdCapture+Related.js",
      "pluginId": "scandit-cordova-datacapture-id",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-id.IdCaptureSettings",
      "file": "plugins/scandit-cordova-datacapture-id/www/js/IdCaptureSettings.js",
      "pluginId": "scandit-cordova-datacapture-id",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-text.Cordova",
      "file": "plugins/scandit-cordova-datacapture-text/www/js/Cordova/Cordova.js",
      "pluginId": "scandit-cordova-datacapture-text"
    },
    {
      "id": "scandit-cordova-datacapture-text.Defaults",
      "file": "plugins/scandit-cordova-datacapture-text/www/js/Cordova/Defaults.js",
      "pluginId": "scandit-cordova-datacapture-text"
    },
    {
      "id": "scandit-cordova-datacapture-text.TextCaptureListenerProxy",
      "file": "plugins/scandit-cordova-datacapture-text/www/js/Cordova/TextCaptureListenerProxy.js",
      "pluginId": "scandit-cordova-datacapture-text"
    },
    {
      "id": "scandit-cordova-datacapture-text.CapturedText",
      "file": "plugins/scandit-cordova-datacapture-text/www/js/CapturedText.js",
      "pluginId": "scandit-cordova-datacapture-text",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-text.TextCapture",
      "file": "plugins/scandit-cordova-datacapture-text/www/js/TextCapture.js",
      "pluginId": "scandit-cordova-datacapture-text",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-text.TextCapture+Related",
      "file": "plugins/scandit-cordova-datacapture-text/www/js/TextCapture+Related.js",
      "pluginId": "scandit-cordova-datacapture-text",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-text.TextCaptureSettings",
      "file": "plugins/scandit-cordova-datacapture-text/www/js/TextCaptureSettings.js",
      "pluginId": "scandit-cordova-datacapture-text",
      "merges": [
        "Scandit"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-file": "6.0.2",
    "cordova-plugin-advanced-http": "3.1.0",
    "cordova-plugin-splashscreen": "6.0.0",
    "cordova-plugin-statusbar": "2.4.3",
    "scandit-cordova-datacapture-core": "6.8.0-beta.2",
    "scandit-cordova-datacapture-id": "6.8.0-beta.2",
    "scandit-cordova-datacapture-text": "6.8.0-beta.2"
  };
});
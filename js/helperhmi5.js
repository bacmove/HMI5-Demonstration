JSInterface.updateDevice = function(deviceID, deviceName, segmentation,
    vendorID, modelName) {
    try {
        JSInterface.platformNotificationAlert("updateDevice", (deviceID + " " + 
                deviceName + " " + segmentation + " " + vendorID + " " + modelName), "OK",
            true, "info");
    } catch (e) {
        JSInterface.platformNotificationAlert("Error updateDevice", e, "OK",
            true, "error");
    }
}

JSInterface.readDeviceObjectPropertyAck = function(deviceID, objectType,
    objectInstance, propertyIdentifier, arrayIndex, value) {
    try {
        var readobject_value_el = document.getElementById(
            'readobject_value');

        var scope = angular.element(readobject_value_el).scope();

        scope.readObjectData.value = value;

        scope.$apply();
    } catch (e) {
        JSInterface.platformNotificationAlert(
            "Error readDeviceObjectPropertyAck", e, "OK", true, "error"
        );
    }
}

JSInterface.writeDeviceObjectPropertyAck = function(deviceID, objectType,
    objectInstance, propertyIdentifier, arrayIndex) {
    try {
        var writeobject_message_el = document.getElementById(
            'writeobject_message');

        var scope = angular.element(writeobject_message_el).scope();

        scope.writeObjectData.message = "Write completed";

        scope.$apply();
    } catch (e) {
        JSInterface.platformNotificationAlert(
            "Error writeDeviceObjectPropertyAck", e, "OK", true,
            "error");
    }
}

JSInterface.writeDeviceObjectPropertyError = function(deviceID, objectType,
    objectInstance, propertyIdentifier, arrayIndex, errorClass,
    errorClassText, errorCode, errorCodeText) {
    try {
        var writeobject_message_el = document.getElementById(
            'writeobject_message');

        var scope = angular.element(writeobject_message_el).scope();

        scope.writeObjectData.message = "Write error: " + errorClassText +
            " (" + errorClass + ") / " + errorCodeText + " (" + errorCode +
            ")";

        scope.$apply();
    } catch (e) {
        JSInterface.platformNotificationAlert(
            "Error writeDeviceObjectPropertyError", e, "OK", true,
            "error");
    }
}

JSInterface.platformNotificationConfirmPositive = function() {
    /*try {
        JSInterface.platformNotificationAlert("Positive button",
            "Positive button pressed.", "OK", true, "info");
    } catch (e) {
        JSInterface.platformNotificationAlert(
            "Error platformNotificationConfirmPositive", e, "OK", true,
            "error");
    }*/
}

JSInterface.platformNotificationConfirmNegative = function() {
    /*try {
        JSInterface.platformNotificationAlert("Negative button",
            "Negative button pressed.", "OK", true, "info");
    } catch (e) {
        JSInterface.platformNotificationAlert(
            "Error platformNotificationConfirmNegative", e, "OK", true,
            "error");
    }*/
}

/*
JSInterface.platformOnStop = function() {
    try {
        JSInterface.platformNotificationAlert("On Stop", "On Stop",
            "OK", true, "info");
    } catch (e) {
        JSInterface.platformNotificationAlert(
            "Error platformOnStop", e, "OK", true, "error");
    }
}

JSInterface.platformOnRestart = function() {
    try {
        JSInterface.platformNotificationAlert("On Start", "On Start",
            "OK", true, "info");
    } catch (e) {
        JSInterface.platformNotificationAlert(
            "Error platformOnRestart", e, "OK", true, "error");
    }
}*/

JSInterface.platformOnWiFiConnected = function() {
    try {
        JSInterface.platformNotificationAlert("Wi-Fi", "Wi-Fi is connected.",
            "OK", true, "info");
    } catch (e) {
        JSInterface.platformNotificationAlert(
            "Error platformOnWiFiConnected", e, "OK", true, "error");
    }
}

JSInterface.platformOnWiFiDisconnected = function() {
    try {
        JSInterface.platformNotificationAlert("Wi-Fi",
            "Wi-Fi is disconnected.", "OK", true, "info");
    } catch (e) {
        JSInterface.platformNotificationAlert(
            "Error platformOnWiFiDisconnected", e, "OK", true, "error");
    }
}
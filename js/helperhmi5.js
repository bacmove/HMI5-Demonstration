JSInterface.readDeviceObjectPropertyAck = function(deviceID, objectType, objectInstance, propertyIdentifier, arrayIndex, value)
{
	try 
	{
		var readobject_value_el = document.getElementById('readobject_value');

		var scope = angular.element(readobject_value_el).scope();

		scope.readObjectData.value = value;
		
		scope.$apply();
	}
    catch (e)
    {
		JSInterface.platformNotificationAlert("Error", e, "OK", true, "error");
	}
}

JSInterface.writeDeviceObjectPropertyAck = function(deviceID, objectType, objectInstance, propertyIdentifier, arrayIndex)
{
	try 
	{
		var writeobject_message_el = document.getElementById('writeobject_message');

		var scope = angular.element(writeobject_message_el).scope();

		scope.writeObjectData.message = "Write completed";
		
		scope.$apply();
	}
    catch (e)
    {
		JSInterface.platformNotificationAlert("Error", e, "OK", true, "error");
	}
}

JSInterface.writeDeviceObjectPropertyError = function(deviceID, objectType, objectInstance, propertyIdentifier, arrayIndex, errorClass, errorClassText, errorCode, errorCodeText)
{
	try 
	{
		var writeobject_message_el = document.getElementById('writeobject_message');

		var scope = angular.element(writeobject_message_el).scope();

		scope.writeObjectData.message = "Write error: " + errorClassText + " (" + errorClass + ") / " + errorCodeText + " (" + errorCode + ")";
		
		scope.$apply();
	}
    catch (e)
    {
		JSInterface.platformNotificationAlert("Error", e, "OK", true, "error");
	}
}

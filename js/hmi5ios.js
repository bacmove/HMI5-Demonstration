/* 
	HMI5 iOS Version 1.0
*/ 

if (typeof JSInterface === "undefined")
{
	var JSInterface = new function()
	{
		this.whoIs = function(minimum, maximum)
		{
			if (isNaN(minimum))
			{
				_execute("whoIs");
			}
			else if (isNaN(maximum))
			{
				_execute("whoIs", minimum);
			}
			else
			{
				_execute("whoIs", minimum, maximum);
			}
		}
		
		this.readDeviceObjectProperty = /*Boolean*/function(/*Number*/ deviceID, /*Number*/ objectType, /*Number*/ objectInstance, /*Number*/ propertyIdentifier, /*Number*/ arrayIndex)
		{
			_execute("readDeviceObjectProperty", deviceID, objectType, objectInstance, propertyIdentifier, arrayIndex);
			
			return true;
		}
		
		this.writeDeviceObjectProperty = /*Boolean*/function(/*Number*/ deviceID, /*Number*/ objectType, /*Number*/ objectInstance, /*Number*/ propertyIdentifier, /*Number*/ arrayIndex, /*Number*/ priority, /*Number*/ value, /*Boolean*/ isNullValue)
		{
			_execute("writeDeviceObjectProperty", deviceID, objectType, objectInstance, propertyIdentifier, arrayIndex, priority, value, isNullValue);
			
			return true;
		}
		
		this.platformNotificationAlert = function(/*String*/ title, /*String*/ message, /*String*/ buttonText, /*Boolean*/ cancelable, /*String*/ icon)
		{
			_execute("platformNotificationAlert", title, message, buttonText, cancelable, icon);
		}
		
		this.platformNotificationConfirm = function(/*String*/ title, /*String*/ message, /*String*/ positiveText, /*String*/ negativeText, /*Boolean*/ cancelable, /*String*/ icon)
		{
			_execute("platformNotificationConfirm", title, message, positiveText, negativeText, cancelable, icon);
		}
		
		this.platformNotificationVibrate = function(/*Number*/ milliseconds)
		{
			_execute("platformNotificationVibrate", milliseconds);
		}
		
		this.platformNotificationBeep = function()
		{
			_execute("platformNotificationBeep");
		}
		
		this.platformIsWiFiConnected = function()
		{
			_execute("platformIsWiFiConnected");
		}
		
		function _execute(function_name)
		{
			var url = "hmi5ios://";
			
			// function name
			url += function_name;
			
			// parameter n
			for (var jp=1; jp<arguments.length; jp++)
			{
				if (typeof arguments[jp] === "string")
				{
					url += ("/" + _urlencode(arguments[jp]));
				}
				else
				{
					url += ("/" + arguments[jp] + "");
				}
			}
			
			// alert(url);
			
			_executeURL(url);
			
			return url;
		}
		
		/*
			yourscheme://callfunction/parameter1/parameter2?parameter3=value
		*/
		function _executeURL(url) 
		{
		  var iframe = document.createElement("IFRAME");
		  iframe.setAttribute("src", url);
		  document.documentElement.appendChild(iframe);
		  iframe.parentNode.removeChild(iframe);
		  iframe = null;
		}
		
		/*
			urlencode
		*/
		function _urlencode(str) 
		{
		  //       discuss at: http://phpjs.org/functions/urlencode/
		  //      original by: Philip Peterson
		  //      improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		  //      improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		  //      improved by: Brett Zamir (http://brett-zamir.me)
		  //      improved by: Lars Fischer
		  //         input by: AJ
		  //         input by: travc
		  //         input by: Brett Zamir (http://brett-zamir.me)
		  //         input by: Ratheous
		  //      bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		  //      bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		  //      bugfixed by: Joris
		  // reimplemented by: Brett Zamir (http://brett-zamir.me)
		  // reimplemented by: Brett Zamir (http://brett-zamir.me)
		  //             note: This reflects PHP 5.3/6.0+ behavior
		  //             note: Please be aware that this function expects to encode into UTF-8 encoded strings, as found on
		  //             note: pages served as UTF-8
		  //        example 1: urlencode('Kevin van Zonneveld!');
		  //        returns 1: 'Kevin+van+Zonneveld%21'
		  //        example 2: urlencode('http://kevin.vanzonneveld.net/');
		  //        returns 2: 'http%3A%2F%2Fkevin.vanzonneveld.net%2F'
		  //        example 3: urlencode('http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a');
		  //        returns 3: 'http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a'

		  str = (str + '')
			.toString();

		  // Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
		  // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
		  return encodeURIComponent(str)
			.replace(/!/g, '%21')
			.replace(/'/g, '%27')
			.replace(/\(/g, '%28')
			.
		  replace(/\)/g, '%29')
			.replace(/\*/g, '%2A')
			.replace(/%20/g, '+');
		}

	}

}

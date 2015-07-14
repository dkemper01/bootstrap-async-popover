$(function () {

    var baseUrl = "/Home/FetchDemoTooltipContent";

    function pad(value) {
        return value < 10 ? '0' + value : value;
    }

    function createGmtOffset(date) {

        var offsetToReturn = {
            offsetHours: 0,
            offsetMinutes: 0
        };

        var sign = (date.getTimezoneOffset() > 0) ? "-" : "+";
        var offset = Math.abs(date.getTimezoneOffset());
        var hours = pad(Math.floor(offset / 60));
        var minutes = pad(offset % 60);

        offsetToReturn.offsetHours = sign + hours;
        offsetToReturn.offsetMinutes = sign + minutes;

        return offsetToReturn;
    }


    $('#email-help').popoverasync({
        "placement": "top", "trigger": "click", "title": "More Info", "html": true, "content": function (callback, extensionRef) {

            var currentDate = new Date();
            var gmtOffset = createGmtOffset(currentDate);

            $.getJSON(baseUrl, { "entry": $("#email-input").val(), "gmtOffsetHours": gmtOffset.offsetHours, "gmtOffsetMinutes": gmtOffset.offsetMinutes }, function (fetchedData) {
                callback(extensionRef, fetchedData);
            });

        }
    });

    $('#password-help').popoverasync({
        "placement": "top", "trigger": "hover", "title": "More Info", "html": true, "content": function (callback, extensionRef) {

            var currentDate = new Date();
            var gmtOffset = createGmtOffset(currentDate);

            $.getJSON(baseUrl, { "entry": $("#password-input").val(), "gmtOffsetHours": gmtOffset.offsetHours, "gmtOffsetMinutes": gmtOffset.offsetMinutes }, function (fetchedData) {
                callback(extensionRef, fetchedData);
            });

        }
    });

});



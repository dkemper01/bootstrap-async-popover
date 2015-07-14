# Bootstrap v3.3.5 Async Popover Extension

Fully compatible with the latest version of bootstrap!  An async popover control in which no content is loaded until the user requests it by hovering, clicking, etc. Then, it is loaded asynchronously.

## Installation

Just place the extensions.js file script tag, which contains this async popover extension to Bootstrap, after the link to bootstrap.min.js or bootstrap.js.

```
    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>
    <!-- The Async Popover Plugin -->
    <script src="js/extensions.js"></script>
```


## Usage

All you really need is a selector from which the popup will display.  The body of function(callback, extensionRef) { ... } is where your code goes.
You also need ```function (fetchedData) {
                callback(extensionRef, fetchedData);
            }``` to tell your popover about the returned content.  That's it!!  Here's an example using $.getJSON with data going to the server. 

```
 $('<your-help-icon-selector>').popoverasync({
        "placement": "right", "trigger": "hover", "title": "More Info", "html": true, "content": function (callback, extensionRef) {

            var currentDate = new Date();
            var gmtOffset = createGmtOffset(currentDate);

            $.getJSON(baseUrl, { "entry": $("<sample-input-field-selector>").val(), "gmtOffsetHours": gmtOffset.offsetHours, "gmtOffsetMinutes": gmtOffset.offsetMinutes }, function (fetchedData) {
                callback(extensionRef, fetchedData);
            });

        }
    });
```
## Demo

[Demo Site](http://bootstrapasyncpopover.apphb.com/ "Bootstrap Async Popover Demo") 

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

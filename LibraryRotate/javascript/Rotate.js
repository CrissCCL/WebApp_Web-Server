// Example JavaScript for JSLI Calculator Example WebVI
//
// This example creates a function literal, and adds
// the function as a property of the Window object.
// The functions are defined within an anonymous function ( (function(){}()); )
// as a closure to prevent polluting the global namespace with our variables.
// If 'window.' is removed from 'window.AddWithJSLI' then the function
// is no longer accessible from the WebVI. This is because it is only in the scope of
// this anonymous function, and not the global scope of the browser.
//
// From more information see:
// https://github.com/ni/webvi-examples
// https://developer.mozilla.org/en-US/docs/Web/API/Window

(function () {
    // Use strict prevents silent and common JavaScript errors.
    'use strict';
    window.RotateWithJSLI = function (imgId, angle) {
        var elements = document.getElementsByTagName('ni-url-image');
        var modifiedId = imgId.charAt(0).toUpperCase() + imgId.slice(1);
        var dataItem = `dataItem_${modifiedId}`;
        for (var i=0; i<elements.length; i++) {
            var img = elements.item(i);
            var element_info = JSON.parse(img.getAttribute('binding-info'));
            if (element_info.dataItem == dataItem) {
                img.style.transform = `rotate(${angle}deg)`;
            };
        }
    };

    window.SaveData = function(filename, content) {
        var a = document.createElement("a");
        a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
        a.setAttribute('target', '_blank');
        var now = new Date(Date.now());
        var date = `${now.getFullYear()}${now.getMonth()}${now.getDate()}`;
        var time = `${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
        a.setAttribute('download', `data_${date}_${time}.m`);
        a.click();
    }

}());
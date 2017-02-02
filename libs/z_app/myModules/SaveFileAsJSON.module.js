//
// Ref : https://github.com/nwjs/nw.js/wiki/save-persistent-data-in-app
// Ref : http://docs.nwjs.io/en/latest/References/App/#appdatapath
// 
// Currently it srores in : /Users/saumya/Library/Application Support/chaos/Default
// Actual path : ~/Library/Application Support/<name>/Default

//var nw = require('nw.gui'); //This line is only required for NW.js 0.12.x and below
var fs = require('fs');
var path = require('path');

function saveSettings (settings, callback) {
    var file = 'my-settings-file.json';
    var filePath = path.join(nw.App.dataPath, file);
    fs.writeFile(filePath, settings, function (err) {
        if (err) {
            console.info("There was an error attempting to save your data.");
            console.warn(err.message);
            return;
        } else if (callback) {
            callback();
        }
    });
}

/*
var mySettings = {
    "language": "en",
    "theme": "dark"
};
*/
/*
saveSettings(mySettings, function () {
    console.log('Settings saved');
});
*/

module.exports.saveSettings = saveSettings;
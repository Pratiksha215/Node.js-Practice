var fs = require('fs')

fs.appendFile('calc1.js','console.log("done")',function(err){
    console.log("Data Saved");
})
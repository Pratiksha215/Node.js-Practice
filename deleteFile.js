var fs = require('fs')

fs.unlink('calc2.js',function(err){
    console.log('Deleted');
})
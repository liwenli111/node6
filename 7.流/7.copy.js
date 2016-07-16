var fs = require('fs');
function copy(source,target){
    var rs = fs.createReadStream(source);
    var ws = fs.createWriteStream(target);
    rs.pipe(ws);
}
copy('./hello.png','./world.png');








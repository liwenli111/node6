var http = require('http');
http.get("http://baijia.baidu.com/", function(res) {
    res.setEncoding('utf8')
    res.on('data', function (data) {
        console.log(data);
    })
}).on('error', function(e) {
    console.log("错误：" + e.message);
});
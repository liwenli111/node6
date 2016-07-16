var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var mime = require('mime');
var querystring = require('querystring');
var userList = [];
http.createServer(function (req,res) {
    var urlObjs = url.parse(req.url);
    var pathname = urlObjs.pathname;
    if(pathname=='/'){
        res.setHeader('content-type','text/html;charset=utf8');
        fs.createReadStream('./reg.html').pipe(res);
    }else if(pathname=='/favicon.ico'){
        res.statusCode = 404;
        res.end('not found');
    }else if(pathname=='/reg'){
        //匹配前台ajax访问的路由
        //请求体里的内容需要监听ondata
        var result = "";
        req.on('data', function (data) {
            result+=data;
        });
        //在结束的时候把字符串接受完毕
        req.on('end', function () {
            //将查询字符串转化为对象
            var re = querystring.parse(result);
            userList.push(re);
            res.end(JSON.stringify(userList))//buffer或者字符串
        })
    }else {
        var flag = fs.existsSync('.'+pathname);
        if(flag){
            res.setHeader('content-type',mime.lookup(pathname)+';charset=utf8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
            res.statusCode = 404;
            res.end('not found');
        }
    }
}).listen(8888);

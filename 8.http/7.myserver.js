var http = require('http');

//要爬取别人网站的内容拼成一个页面我访问端口时把拼好的页面响应给我们
http.createServer(function (request,response) {
    var strLar = '<!DOCTYPE html>\
    <html lang="en">\
    <head>\
    <meta charset="UTF-8">\
    <title>Title</title>\
    </head>\
    <body>\
    <div></div>\
    </body>\
    </html>';
<<<<<<< HEAD

=======
>>>>>>> 8bfabeaa26751997a8b34dbbe02908f8abd72df0
    http.get('http://baijia.baidu.com', function (res) {
        //请求服务器，别人返回给我的响应
        var result = '';
        //res读取response中的数据
        res.on('data', function (data) {
            result+=data;
        });
        res.on('end', function () {
            //console.log(result);
            //把result中所有的h3都拿出来  [\S\s]*?非贪婪
            var arr = result.match(/<h3[\S\s]*?<\/h3>/g);
            var str = '<ul>';
            arr.forEach(function (item) {
                //item当前h3
                str+='<li>'+item+'</li>'
<<<<<<< HEAD
            })
=======
            });
>>>>>>> 8bfabeaa26751997a8b34dbbe02908f8abd72df0
            str += '</ul>';
            strLar = strLar.replace('<div></div>',str);
            //要将自己的页面进行写回
            response.end(strLar);
        });
<<<<<<< HEAD
    })




=======
    });
>>>>>>> 8bfabeaa26751997a8b34dbbe02908f8abd72df0
}).listen(8080);
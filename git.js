const http = require("http")


// 第一次创建

// 这是一个服务器
let server = http.createServer((req,res)=> {
    res.write("哈哈哈")
    res.end("hello,world")
})

// 第一次修改
server.listen(8080);


var express = require('express');
var multer  = require('multer');
var app = express();
// # 第三步 配置上传文件
app.use(express.static(__dirname));
var storage = multer.diskStorage({
    //存储的目录
    destination:function (req,file,cb) {
        cb(null,'./upload/images');
    },
    //文件名
    filename:function (req,file,cb) {
        cb(null,file.fieldname + '_' +Date.now()+'.'+file.originalname.match(/\..+/)[0])
    }
});
// # 放到中间里面去
var upload = multer({storage:storage});

// poster 放的名字就是name的名字
app.post('/upload',upload.single('uploadImage'),function(req, res, next){
	 res.end('1');
});

app.listen('8080');

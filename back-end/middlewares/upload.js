const path = require('path');
const multer = require('multer');
const randomstring = require("randomstring");

/* const upload = multer({
    dest: path.resolve(__dirname,'../public/upload')
}) */

const minetypeMap={
    'image/png':'.png',
    'image/jpg':'.jpg',
    'image/jpeg':'.jpeg',
    'image/gif':'.gif'
}

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, path.resolve(__dirname,'../public/upload'))
    },
    filename:function(req,file,cb){ 
        let {}
        cb(null,file.fieldname + '-' + randomstring.generate(6))
    }
})

const upload=multer({
    storage
}).single('movieLogo')

/* module.exports = ((req, res, next) => {
    return upload.single('movieLogo')
})() */
module.exports=(req,res,next)=>{
    upload(req,res,(err)=>{

    })
}
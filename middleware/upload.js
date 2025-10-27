
const multer = require('multer')
const path = require('path')
const storage = multer.memoryStorage();


const upload = multer({storage,
limits:{
    fileSize: 2 * 1024 * 1024
}, // 2m limit

fileFilter: (req,file,cb) => {
    const allowedTypes = ['image/jpeg','image/jpg','image/png'];
    if (allowedTypes.includes(file.mimetype)){

        cb(null,true);
    } else {
        cb(new Error('onyly jpg and png file are allowed!'),false);
    }
}


})

module.exports = upload;
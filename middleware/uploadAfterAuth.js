const upload = require('./upload')

const uploadAfterAuth = (req,res,next) => {
    upload.single("image")(req,res, function(err){

        if (err){
            return res.status(400).json({
                success:false,
                message:err.message
            });
   
        };
   next()
   
    });
};

module.exports = uploadAfterAuth
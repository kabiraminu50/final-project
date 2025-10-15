//registration
const register = async (req,res) => {
try{
      // cheaking if login data is exist
    const {username,email,password} = req.body
    const user = await user.findOne({username})
    const dualEmail = await user.findOne({email})


    if (username){
        res.status(400).json({
            success:false,
            message:"username already exist"
        })
    }

if (dualEmail){
    res.status(400).json({
        success:false,
        message:'email already exist'
    })
}

await user({username,email,password}).save()

return res.status(200).json({
    success:true,
    message:"user created successfully"
})

}
catch(err){
res.status(500).json({
    success:false,
    message:err.message
})
}



}


//login to user profile

// Access User Profile
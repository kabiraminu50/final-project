const User = require('../models/user')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


//user signUp
const signUp = async (req,res) => {
try{
    
    const {username,email,password} = req.body

      // cheaking if login data is exist
    const existingUser = await User.findOne({$or:[{username},{email}]})
    

    if (existingUser){
       return res.status(400).json({
            success:false,
            message:"username or email already singup"
        })
    }
// Hash password

const saltRounds = 10;
const hashedPassword = await bcrypt.hash(password,saltRounds)


// create new user

await User.create({username,email,password:hashedPassword})





return res.status(201).json({
    success:true,
    message:"user created successfully"
})


}
catch(err){

   return res.status(500).json({
    success:false,
    message:err.message
})
}

}


//login to user profile

const login = async (req,res) => {
    try{
        const {username,password} = req.body
        const user = await User.findOne({username})
        if (!user){
            return res.status(400).json({
                success:false,
                message:'invalid username'
            })
        }

const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch){

            return res.status(400).json({
                success:false,
                message:"incorrect password"
            })
        }

// Generatin jwt

const token = jwt.sign({id:user._id},"digitalRegenesys",{expiresIn:'5h'})

return res.status(200).json({
    token
})
        


    }catch(err){
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}





// Access User Profile

const prof = async (req,res) => {
    try{

        const id = req.user.id

        const user = await User.findById(id).select('-password')

        if (!user){

            return res.status(400).json({
                success:false,
                message: 'user not found'
            })
        }
         
        return res.status(200).json({
            success:true,
            prof:user
        })



    }catch(err){
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

module.exports = {signUp,login,prof}
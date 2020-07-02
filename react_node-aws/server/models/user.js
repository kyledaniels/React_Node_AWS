const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        max:12,
        unique:true,
        index: true,
        lowercase: true
    },

    name:{
        type: String,
        required: true,
        max:32,
    },

    hash_password: {
        type: String,
        required: true,
    },
    
    salt: String,
    role: {
        type: String,
        default: 'subsriber'
    },

    resetPasswordLink: {
        data: String,
        default: ''
    }
   },
   {timestamps: true}

   );

   
const mongoose = require('mongoose');

const crypto = require('crypto');

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

   //virtual fields

   userSchema.virtual('password')
       .set(function(password){
        //create temp variable called _password
        this._password = password
        // generate salt
        this.salt = this.makeSalt()
        // encrpt password
        this.hashed_password = this.encryptPassword(password)
       })

       .get(function(){
           return this._
       })

   //methods:authenticate, encryptPassword, makeSalt

   userSchema.methods = {
          encryptPassword:function(password){
              if(password) return ''
              try {
                  return crypto.createHmac('sha1', this.salt)
                              .update(password)
                              .digest('hex')
              } catch (err){
                  return ''
              }
          },

          makeSalt: function(){
              return Math.round(new Date().valueOf() * Math.random())+ '';
          }
   };

  // export user model
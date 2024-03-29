import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    
    password:{
        type: String,
        required: true,
        min: 6
    },

    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },

    profilePicture:{
        type: String,
        default: ""
    },
    
});


const User = mongoose.model('User', userSchema);



export default User;
const {Schema,model} = require("mongoose");
const validator = require("validator")

const userSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
        minlength: [2, "Minimum length for a name is 2 charachters"],
        maxlength: [100, "Maximum length for a name is 100 charachters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique:true,
        trim:true,
        lowercase:true,
        validate: validator.isEmail(this.email)
        },
    password: {
        type:String,
        required: [true, "Please chose a password"],
        min: 8,
        },
    phone: {
        type:String,
        required: [true, "Please chose a phone number"],
    },
    is_admin: {
        type:Number,
        default: 0,
    },
    is_verified: {
        type:Number,
        default: 0,
    },
    created_on: {
        type:Date,
        default:Date.now,
    },
    isBanned: {
        type: Boolean,
        default: false
    }
})

const User = model("users", userSchema);

module.exports = User
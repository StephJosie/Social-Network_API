const { Schema, model } = require('mongoose')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 30,
            trim: true,

        },
        email: {
            type: String,
        },

        thoughts: {
            type: Schema.Types.ObjectId,
            ref: "Thought",
            minlength: 0
        },
        friends: {
            type: Schema.Types.ObjectId,
            ref: "User"

        }


    });


userSchema.virtual("Friends").get(function () {
    return this.friends.length
})


const User = model('User', userSchema);

module.exports = User;
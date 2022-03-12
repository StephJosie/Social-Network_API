const { Schema, model } = require('mongoose');
const dateFormat = require("../utils/dateFormat")
const thoughtSchema = new Schema(
    {
        text: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 400
        },
        username: {
            type: String,
            required: true
        },
        authorId: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }


    });

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
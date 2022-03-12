const { Schema, model } = require('mongoose');
const dateFormat = require("../utils/dateFormat")
const reactionSchema = require("./reaction")
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
        date: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        reactions: [reactionSchema]


    });

thoughtSchema.virtual('reactionAmount').get(function () {
    return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
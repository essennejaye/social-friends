const moment = require('moment');
const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Thought cannot be blank',
            // minlength: [1],
            maxlength: [280, 'Thought exceeded max number of characters!']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: 'You must enter your username'
        },
        reactions: 
            [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);
const Thought = model('Thought', ThoughtSchema);

// get count of reactions array field
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

module.exports = Thought;
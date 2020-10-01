const { Schema, Types } = require('mongoose');
const moment = require('moment');


const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
            required: true
        },
        reactionBody: {
            type: String,
            required: 'Reaction cannot be blank!',
            maxlength: [280, 'Reaction exceeds max character length!']
        },
        username: {
            type: String,
            required: 'You must enter a username!'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false,
    }
);

module.exports = ReactionSchema;

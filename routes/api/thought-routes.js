const router = require('express').Router();

const {
    addThought,
    getAllThought,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// Get thoughts for /api/thoughts
router.route('/')
    .get(getAllThought);

// Post thoughts at /api/thoughts
router.route('/:userId/')
    .post(addThought);

// Delete, Update, GetById for /api/thoughts/:id
router.route('/:id')
    .put(updateThought)
    .get(getThoughtById)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(addReaction);

// /api/thoughts/:thoughtId/reactions/reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;
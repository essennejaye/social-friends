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
// Post reactions for thoughts
router.route('/:id')
    .put(updateThought)
    .get(getThoughtById)
    .delete(deleteThought);

// /api/thoughts/:id/reactions
router.route('/:id/reactions')
    .post(addReaction);


// delete reaction
router.route('/:thoughtId/:reactionId')
    .delete(deleteReaction);

module.exports = router;
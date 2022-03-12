const router = require("express").Router();

const {
    getThought,
    createThought,
    singleThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getThought).post(createThought);
router.route("/:thoughtId").get(singleThought).delete(deleteThought);
router.route("/:thoughtId/reaction").post(addReaction);
router.route("/:thoughtId/reaction/:reactionId").delete(removeReaction);


module.exports = router;
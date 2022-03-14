const router = require("express").Router();
const {
    getUser,
    singleUser,
    createUser,
    addFriend,
    removeFriend,
} = require("../../controllers/userController");

router.route('/').get(getUser).post(createUser);
// router.route("/:userId").get(singleUser).delete(deleteUser);
router.route("/:userId").get(singleUser);
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend)

module.exports = router;
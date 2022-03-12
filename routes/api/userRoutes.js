const router = require("express").Router;
const {
    getUser,
    singleUser,
    deleteUser,
    createUser,
    addFriend,
    deleteFriend,
} = require("../../controllers/userController");

router.route('/').get(getUser).post(createUser);
router.route("/:userId").get(singleUser).delete(deleteUser);
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
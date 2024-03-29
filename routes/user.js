const express = require("express");
const { handleGetAllusers, handleGetUserById, handleCreateNewUser, handleUpdateUserById, handleDeleteUserById } = require("../controllers/user");

const router = express.Router();

router.get("/", handleGetAllusers);

router.get("/:id", handleGetUserById);

router.post("/", handleCreateNewUser);

router.patch("/:id", handleUpdateUserById);

router.delete("/:id", handleDeleteUserById);

module.exports = router;
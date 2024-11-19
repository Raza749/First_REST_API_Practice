const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/user.js");
const router = express.Router();

// Routes

// router.get("/users", async (req, res) => {
//     const allDbUsers = await User.find({});
//     const html = `
//             <ul>
//                 ${allDbUsers
//                   .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
//                   .join("")}
//             </ul>
//         `;
//     res.send(html);
//   });

router.get("/", handleGetAllUsers);

router.get("/:id", handleGetUserById);

// POST
router.post("/", handleCreateNewUser);

// PATCH
router.patch("/api/users/:id", handleUpdateUserById);

//DELETE
router.delete("/api/users/:id", handleDeleteUserById);

module.exports = router;

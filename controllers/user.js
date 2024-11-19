const User = require("../models/user.js");

const handleGetAllUsers = async (req,res) => {
  const allDbUsers = await User.find({});
  res.json(allDbUsers);
};

const handleGetUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ ERROR: "User not found" });
  res.json(user);
};

const handleUpdateUserById = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { lastName: "Chnaged" });
  res.json({ status: "SUCCESS" });
};


// const handleDeleteUserById = async (req, res) => {
//   await User.findByIdAndDelete(req.params.id);
//   res.json({ status: "Sucess" });
// };

const handleDeleteUserById = async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  if (!deletedUser) return res.status(404).json({ ERROR: "User not found" });
  res.json({ status: "SUCCESS", user: deletedUser });
};


const handleCreateNewUser = async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.job_title
  ) {
    res.status(400).json({ message: "All the fields are required." });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    jobTitle: body.job_title,
  });
  console.log("RESULT ", result);
  return res.status(201).json({ message: "SUCCESS",_id:result.id });
};

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};

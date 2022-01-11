const { User } = require('../../models')

const getAllUsers = async () => {

}
const getUserById = async () => {

}
const createUser = async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
const updateUser = async () => {

}
const deleteUser = async () => {

}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser }
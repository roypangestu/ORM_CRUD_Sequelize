const { User } = require("../models");

//POST - CREATE DATA
const createNewUser = async (req, res) => {
  try {
    const success = await User.bulkCreate(req.body);
    res.json({ msg: "CREATE new user succes", success });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

//GET - READ USER
const getAllUser = async (req, res) => {
  try {
    const result = await User.findAndCountAll();
    res.json(result).status(200);
  } catch (error) {
    res.json(error).status(422);
  }
};

//GET USER BY ID
const getUserById = async (req, res) => {
  try {
    const data = await User.findByPk(req.params.id_user);
    const result = data
      ? data
      : `ID user ${req.params.id_user} not found in Database`;
    res.json(result).status(200);
  } catch (error) {
    res.json(error).status(422);
  }
};

// //UPDATE USER
const updateUser = async (req, res) => {
  try {
    const success = await User.update(req.body, {
      where: { id: req.params.id_user },
    });
    res.json({ msg: "Update successfuly", success });
  } catch (error) {
    res.status(400).json(error);
  }
};

// //DELETE USER
const deleteUser = async (req, res) => {
  try {
    const data = await User.findByPk(req.params.id_user);
    if (data) {
      data.destroy();
      msg = "DELETE user success";
    } else {
      msg = `${req.params.id_user} not found in Database`;
    }
    res.json({ message: msg });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createNewUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
};

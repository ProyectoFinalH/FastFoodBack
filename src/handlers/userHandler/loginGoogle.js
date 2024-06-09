const { loginGoogle } = require("../../controllers/userController/loginGoogle");

const loginGoogleHandler = async (req, res) => {
  const { token } = req.body;

  try {
    const user = await loginGoogle(token);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginGoogleHandler };

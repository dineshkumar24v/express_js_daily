function loginController(req, res) {
  const userData = {
    email: "vinay@gmail.com",
    password: "@1234",
  }; //mock user data

  const {email, password} = req.body; //destructuring

  const profile = 
  email === userData.email && password === userData.password ? "login success" : "login failed"; //conditional (ternary) operator

  return res.send(profile);
}

module.exports = {loginController};
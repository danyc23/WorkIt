require("dotenv").config();
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

// Create a company
const newCompany = async (req, res) => {
  const { companyName, country, address, phone, email, password } = req.body;
  if (!companyName || !country || !address || !phone || !email || !password) {
    res.status(400).json({ msg: "Please insert all fields" });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.company
      .create({
        data: {
          companyName: companyName,
          country: country,
          address: address,
          phone: phone,
          email: email,
          password: hashedPassword,
        },
      })
      .then((newCompany) => {
        res.status(201).json({ newCompany });
      })
      .catch((err) => {
        res.send(err);
      });
  }
};
// Get a company with all its information
const getCompanyWithPost = async (req, res) => {
  const data = await prisma.company.findUnique({
    where: { id: parseInt(req.params.id) },
    include: { posts: true },
  });
  if (!data) {
    res.sendStatus(500);
  }
  res.status(200).json(data);
};

const logInCompany = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({ msg: "Please insert email and password" });
  } else {
    await prisma.company
      .findUnique({
        where: { email: req.body.email },
        select: { password: true, id: true },
      })
      .then((user) => {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (err) {
            throw err;
          }
          if (result) {
            let token = jwt.sign(
              { [req.body.email]: req.body.email },
              process.env.ACCESS_TOKEN_SECRET
            );
            res.status(200).json({ token, id: user.id });
          } else {
            res.status(404).json({ error: "Incorrect password or email" });
          }
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

module.exports = {
  newCompany,
  getCompanyWithPost,
  logInCompany,
};

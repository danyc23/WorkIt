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
    console.log("creating user");
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

module.exports = {
  newCompany,
};

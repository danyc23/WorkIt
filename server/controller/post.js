const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const newPost = async (req, res) => {
  const { title, location, description, date } = req.body;
  const { companyId } = req.params;
  if (!title || !location || !description || !date) {
    console.log(req.body);
    res.status(400).json({ msg: "Please insert all fields" });
  } else {
    await prisma.post
      .create({
        data: {
          companyId: companyId,
          title: title,
          location: location,
          description: description,
          date: date,
        },
      })
      .then((newPost) => {
        console.log(newPost);
        res.status(201).json(newPost);
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

module.exports = { newPost };

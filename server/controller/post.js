const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// getting all posts
const allPosts = async (req, res) => {
  const data = prisma.post
    .findMany()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getPost = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(401).json({ msg: "No job with this id" });
  }
  const data = await prisma.post.findUnique({
    where: { id: Number(id) },
  });
  if (!data) {
    res.sendStatus(500).json({ msg: `No Job matching this id:${id}` });
  }
  res.status(200).json(data);
};

const newPost = async (req, res) => {
  const { title, location, description, date } = req.body;
  const companyId = req.params.id;
  if (!title || !location || !description || !date) {
    console.log(req.body);
    res.status(400).json({ msg: "Please insert all fields" });
  } else {
    let foundCompany = await prisma.company.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (foundCompany) {
      await prisma.post
        .create({
          data: {
            companyId: Number(companyId),
            title: title,
            location: location,
            description: description,
            date: date,
          },
        })
        .then((newPost) => {
          res.status(201).json(newPost);
        })
        .catch((err) => {
          res.send(err);
        });
    } else {
      res.status(400).json({ msg: "The user doesn't exist" });
    }
  }
};

module.exports = { newPost, allPosts, getPost };

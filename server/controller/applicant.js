const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const jobApplication = async (req, res) => {
  let postId = Number(req.params.id);
  let { name, lastname, email, salary, details, resume } = req.body;
  console.log(req.body);
  if (!name || !lastname || !email || !salary || !details || !resume) {
    res.status(401).json({ msg: "Please, fill all spaces" });
  } else {
    await prisma.applicant
      .create({
        data: {
          name,
          lastname,
          email,
          salary,
          details,
          resume,
          postId,
        },
      })
      .then((newApplication) => {
        res.status(201).json({ newApplication });
      })
      .catch((err) => {
        console.log("----> error");
        res.send(err);
      });
  }
};

module.exports = { jobApplication };

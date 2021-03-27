const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const jobApplication = async (req, res, next) => {
  let postId = Number(req.params.id);
  const resume = req.file;
  console.log("body--->", req.body);
  console.log("file--->", req.file);
  const { name, lastname, email, salary, details, phone } = req.body;
  if (
    !name ||
    !lastname ||
    !email ||
    !salary ||
    !details ||
    !resume ||
    !phone
  ) {
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
          phone,
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

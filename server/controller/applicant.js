const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const jobApplication = async (req, res) => {
  let postId = Number(req.params.id);
  const phone = parseInt(req.body.phone);
  const salary = parseInt(req.body.salary);
  const resume = req.file.buffer;
  const lastname = req.body.lastName;
  const { name, email, details } = req.body;
  if (
    !name ||
    !lastname ||
    !email ||
    !salary ||
    !details ||
    !resume ||
    !phone
  ) {
    res.status(400).json({ msg: "Please, fill all spaces" });
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

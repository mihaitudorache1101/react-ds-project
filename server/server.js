const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Member = require("./models/Member");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json());

// @route   POST /create
// @desc    Create a member
// @access  Public
app.post("/create", async (req, res) => {
  try {
    const { name, bio, age } = req.body;

    const newMember = new Member({
      name,
      bio,
      age,
    });
    const savedMember = await newMember.save();

    res.json(savedMember);
  } catch (err) {
    res.status(500).send();
  }
});

// @route   Get /
// @desc    Get all members
// @access  Public
app.get("/", (req, res) => {
  Member.find((err, members) => {
    if (err) {
      console.log(err);
    } else {
      res.json(members);
    }
  });
});

// @route   Get /:id
// @desc    Get member by id
// @access  Public
app.get("/:id", (req, res) => {
  const id = req.params.id;
  Member.findById(id, (err, member) => {
    res.json(member);
  });
});

// @route   POST /:id
// @desc    Update a member
// @access  Public
app.post("/:id", (req, res) => {
  const id = req.params.id;
  Member.findById(id, (err, member) => {
    if (!member) {
      res.status(404).send("Member not found");
    } else {
      member.name = req.body.name;
      member.bio = req.body.bio;
      member.age = req.body.age;

      member
        .save()
        .then((member) => {
          res.json(member);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});

// @route   DELETE /:id
// @desc    Delete a member
// @access  Public
app.delete("/:id", async (req, res) => {
  try {
    const memberId = req.params.id;

    const existingMember = await Member.findById(memberId);

    await existingMember.delete();

    res.json(existingMember);
  } catch (err) {
    res.status(500).send();
  }
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

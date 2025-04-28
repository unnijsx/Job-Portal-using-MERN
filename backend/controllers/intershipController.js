const Internship = require('../models/internshipSchema');
const verifyToken = require('../middlewares/auth');

const AddInternship = (req, res) => {
  const newInternship = new Internship({
    title: req.body.title,
    description: req.body.description,
    stipend: req.body.stipend,
    location: req.body.location,
    company: req.body.company,
    duration: req.body.duration
  });
  newInternship.save()
    .then((result) => {
      return res.json({
        message: "New internship added",
        data: result
      });
    })
    .catch((err) => {
      console.log("Error saving internship:", err);
      return res.status(500).json({
        message: "Error adding internship",
        error: err
      });
    });
};

const UpdateInternship = (req, res) => {
  let updateData = {
    title: req.body.title,
    description: req.body.description,
    stipend: req.body.stipend,
    location: req.body.location,
    company: req.body.company,
    duration: req.body.duration
  };

  Internship.findByIdAndUpdate(req.params.id, updateData, { new: true })
    .then((result) => {
      return res.json({
        message: "Internship data updated",
        data: result
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({ message: "Update failed", error });
    });
};

const DeleteInternship = (req, res) => {
  Internship.findByIdAndUpdate(req.params.id, { status: false }, { new: true })
    .then((result) => {
      return res.json({
        message: "Internship Deleted"
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({ message: "Delete failed", error });
    });
};

const ViewInternship = [verifyToken, (req, res) => {
  Internship.find()
    .then((result) => {
      return res.json({ data: result });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({ message: "Fetch failed", error });
    });
}];

const ViewSingleInternship = (req, res) => {
  Internship.findById(req.params.id)
    .then((result) => {
      return res.json({
        data: result
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({ message: "Fetch single internship failed", error });
    });
};

module.exports = {AddInternship,
  UpdateInternship,
  DeleteInternship,
  ViewInternship,
  ViewSingleInternship
};

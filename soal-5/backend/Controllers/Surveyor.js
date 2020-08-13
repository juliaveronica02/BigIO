const Models = require("../models")
const Surveyor = Models.Surveyor;

module.exports = {
    createData: (req, res) => {
        Surveyor.create({
            name: req.body.name,
            price: req.body.price,
        })
        .then((result) => res.json(result))
        .catch((err) => res.json(err));
    },
    getData: (req, res) => {
        Surveyor.findAll()
          .then((result) => res.json(result))
          .catch((err) => {
            throw err;
          });
      },
      getDataById: (req, res) => {
        Surveyor.findOne({ where: { id: req.params.surveyorId } })
          .then((result) => res.json(result))
          .catch((err) => {
            throw err;
          });
      },
      deleteDataById: (req, res) => {
        Surveyor.destroy({ where: { id: req.params.surveyorId } })
          .then((result) => res.json(result))
          .catch((err) => {
            throw err;
          });
      },
      updateDataById: (req, res) => {
        Surveyor.update(
          {
            name: req.body.name,
            price: req.body.price,
          },
          { where: { id: req.params.surveyorId } }
        )
          .then((result) => res.json(result))
          .catch((err) => {
            throw err;
          });
      },
    };
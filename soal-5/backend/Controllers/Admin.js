const Models = require("../models");
const Admin = Models.Admin
const Surveyor = Models.Surveyor

module.exports = {
    create: (req, res) => {
        Admin.create({
            surveyorID: req.body.surveyorID,
        })
        .then((result) => res.json(result))
        .catch((err) => {
          throw err;
        });
    },
    getAllData: (req, res) => {
        Admin.findAll({
            include: [
                {
                    model: Surveyor,
                    as:"surveyor",
                }
            ]
        })
        .then((result) => res.json(result))
        .catch((err) => {
          throw err;
        });
    },
}
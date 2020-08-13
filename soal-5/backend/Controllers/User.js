const Models = require("../models");
const User = Models.User
const Admin = Models.Admin

module.exports = {
    create: (req, res) => {
        User.create({
            adminID: req.body.adminID,
        })
        .then((result) => res.json(result))
        .catch((err) => {
          throw err;
        });
    },
    getAllData: (req, res) => {
        User.findAll({
            include: [
                {
                    model: Admin,
                    as:"admin",
                }
            ]
        })
        .then((result) => res.json(result))
        .catch((err) => {
          throw err;
        });
    },
}
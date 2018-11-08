const userData = require("../data/users.js");

module.exports = function (app) {
    app.post("api/users", (req, res) => {
        console.log(req.body.userName);
    });

}
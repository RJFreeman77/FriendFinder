const userData = require("../data/users.js");

module.exports = function (app) {
    app.post("/api/users", (req, res) => {
        userData.push(req.body);

        res.json(userData);
    });
}

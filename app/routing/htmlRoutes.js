const path = require("path");

module.exports = function (app) {
    // Home directory
    app.get("/", (req, res) => res.sendFIle(path.join(__dirname, "../public/home.html")));

    // survey page
    app.get("/survey", (req, res) => res.sendFile(path.join(__dirname, "../public/survey.html")));

    // default
    app.get("*", (req, res) => res.sendFIle(path.join(__dirname, "../public/home.html")));
}
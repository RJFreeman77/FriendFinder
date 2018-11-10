const userData = require("../data/users.js");

module.exports = function (app) {
    app.post("/api/users", (req, res) => {
        let newUserScores = req.body.scoreArry;
        makeInt(newUserScores);



        userData.forEach((userObj) => {
            userObj.scoreArry
        });






        userData.push(req.body); // do this last
        res.json(userData);
    });
}


function difference(num1, num2) {
    return Math.abs(num1 - num2);
}

function totalDifference(arr) {
    let total = 0;
    arr.forEach(int => (total += int));
    return total;
}

function findIndexOfMin(arr) {
    return arr.indexOf(Math.min(...arr));
}

function makeInt(arr) {
    arr.forEach((numString, index) => {
        arr.splice(index, 1, parseInt(numString));
    });
}
// need to push these into an array, then need to return arr.indexOf(Math.min(...arr));

const existingUserData = require("../data/users.js");

module.exports = function (app) {
    app.post("/api/users", (req, res) => {
        let newUser = req.body;
        let newUserScores = req.body.scoreArry;
        numStringToInt(newUserScores);

        let scoreDifferences = [];

        existingUserData.forEach((existingUser, index) => {

            let totalDiff = 0;
            for (let i = 0; i < newUserScores.length; i++) {
                let diffAtIndex = difference(existingUser.scoreArry[i], newUserScores[i]);

                totalDiff += diffAtIndex;
            }
            scoreDifferences.push(totalDiff);
        });

        let indexOfMatch = findIndexOfMin(scoreDifferences);

        res.json(existingUserData[indexOfMatch]);
        existingUserData.push(newUser);
    });
}


function difference(num1, num2) {
    return Math.abs(num1 - num2);
}

// Did not end up needing this function
function totalDifference(arr) {
    let total = 0;
    arr.forEach(int => (total += int));
    return total;
}

function findIndexOfMin(arr) {
    return arr.indexOf(Math.min(...arr));
}

function numStringToInt(arr) {
    arr.forEach((numString, index) => {
        arr.splice(index, 1, parseInt(numString));
    });
}
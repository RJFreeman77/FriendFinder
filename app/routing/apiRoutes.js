const userData = require("../data/users.js");

module.exports = function (app) {
    app.post("/api/users", (req, res) => {
        let newUser = req.body;
        let newUserScores = req.body.scoreArry;
        makeInt(newUserScores);

        let scoreDifferences = [];



        userData.forEach((existingUser, index) => {
            existingUser.scoreArry

            let totalDiff = 0;
            for (let i = 0; i < newUserScores.length; i++) {
                let diffAtIndex = difference(existingUser.scoreArry[i], newUserScores[i]);

                totalDiff += diffAtIndex;
            }
            scoreDifferences.push(totalDiff);
        });

        let indexOfMatch = findIndexOfMin(scoreDifferences);




        userData.push(newUser); // do this last
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

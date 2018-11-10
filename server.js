const express = require("express");
const app = express();

const PORT = process.env.PORT || 9090;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userController = require("./app/routing/apiRoutes");
userController(app);

const viewController = require("./app/routing/htmlRoutes");
viewController(app);

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));





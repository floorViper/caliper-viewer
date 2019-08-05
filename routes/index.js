var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");
//const indexJs = path.basename(__filename);
let reportList = [];

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log("route /");
  fs.readdirSync(path.join(__dirname, "../../scripts"))
    .filter(file => file.indexOf(".") !== 0 && file.slice(-5) === ".html")
    .forEach((fileName, i) => {
      reportList[i] = fileName;
      console.log(fileName, i);
    });
  res.render("index", { reportList });
});

module.exports = router;

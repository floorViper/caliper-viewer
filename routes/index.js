var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");
//const indexJs = path.basename(__filename);
let reportList = [];
fs.readdirSync(path.join(__dirname, "../../script"))
  .filter(file => file.indexOf(".") !== 0 && file.slice(-5) === ".html")
  .forEach((fileName, i) => {
    reportList[i] = fileName;
    console.log(fileName, i);
  });
console.log(reportList);

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { reportList });
});

module.exports = router;

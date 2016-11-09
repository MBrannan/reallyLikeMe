//node/express
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set('port', process.env.PORT || 3000);

//Static Routes

app.get("/*", function(req, res) {
  var file = req.params[0] || "/views/index.html";
  console.log(req.params);

  res.sendFile(path.join(__dirname, "/public/", file))
});
app.listen(app.get('port'), function() {
  console.log("listening on port " + app.get('port'));
});

//node/express
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var bios = [{name: "Andrew", bio: "blah", image: "handsomeAndrew.jpeg", likes: 0},
            {name: "Michael", bio: "I indulge in the dankest memes", image: "handsomeAndrew.jpeg", likes: 0},
            {name: "Jason", bio: "bleg", image: "handsomeAndrew.jpeg", likes: 0}
];

app.use(bodyParser.urlencoded({extended: true}));

app.set('port', process.env.PORT || 3000);

app.get('/bios', function(req, res){
  res.send(bios);
});

app.get('/likes', function(req, res) {
  var likes = {};
  for (var i = 0; i < bios.length; i++) {
    likes[bios[i].name] = bios[i].likes;
  }
  res.send(likes);
});

//Static Routes
app.get("/*", function(req, res) {
  var file = req.params[0] || "/views/index.html";
  console.log(req.params);

  res.sendFile(path.join(__dirname, "/public/", file))
});

app.listen(app.get('port'), function() {
  console.log("listening on port " + app.get('port'));
});

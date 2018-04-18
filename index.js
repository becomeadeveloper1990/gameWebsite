const express = require('express');
const ejs = require('ejs');

var app = new express();
var year = new Date().getFullYear();

app.set('view engine', 'ejs');
app.set("views", "views");

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.render("home", {
    pageTitle: "Welcome to the Home Page!",
    copyrightYear: year
  });
})

app.listen(3000, () => {
  console.log("The server has started!");
});

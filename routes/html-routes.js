//this page works.  

var path = require("path");
var isAuthenticated=require('../config/middleware/isAuthenticated');


module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/aboutus.html"));
  });
  
  app.get("/locations", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/locations.html"));
  });

  app.get("/swimlevels", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/swimlevels.html"));
  });

  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname,"../public/register.html"));
  })

  app.get("/learning", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/learning.html"));
  });

  // app.get("/contact", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/contact.html"));
  // });

  app.get("/faq", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/faq.html"));
  });

  app.get("/login", function(req, res) {
    if(req.user) {
      return res.redirect("/locations");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));

  });

  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/admin.html"));
  });


  app.get("/logout", function(req,res){
    console.log(req.user);
    req.logout();
    console.log("Logged Out!!");
    res.redirect("/");
  })

  app.get("/courses", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/courses.html"));
  });



  
};

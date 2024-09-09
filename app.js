const express = require("express");
const session = require("express-session");
const AuthRouter = require("./src/routes/auth.route.js");
const UserRouter = require("./src/routes/user.route");
const handlebars = require("express-handlebars");
const AuthController = require("./src/controllers/auth.controller.js");


const port = 3000;
const app = express();


const isAuthenticated = (req,res,next) => {
    if (req.session.isAuthenticated) {
        return next();
    } else {
        res.redirect('/login');
    }
}

//Sets our app to use the handlebars engine
app.set("view engine", "hbs");
app.set("views", "./src/views");
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    layoutsDir: __dirname + "/src/views/layouts",
    defaultLayout: null
  })
);

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/auth", AuthRouter);
app.use("/user", UserRouter);

app.get("/", (req, res) => {
  res.render("main", { layout: "index" });
});

app.get("/login",(req,res) => {
    res.render('login',{ layout: null});
})

app.get("/signup", (req,res) => {
    res.render("signup", { layout: null})
})

app.get('/profile',isAuthenticated, (req,res) => {
    res.render("profile",{ layout: null})
});

app.get('/aboutus', (req,res) => {
  res.render("aboutus",{ layout: null})
});



app.get('/dashboard',isAuthenticated, (req,res) => {
    res.render("dashboard");
});

app.get('/logout',AuthController.logoutUser)

app.listen(port, () => {
  console.log(`app Listening http://localhost:${port}`);
});
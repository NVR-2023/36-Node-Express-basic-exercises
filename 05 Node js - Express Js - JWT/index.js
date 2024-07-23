require("dotenv").config();

const express = require("express");
const app = express();

const users = [
  {
    id: 1,
    userName: "John Peters",
    password: "ABC",
  },
  {
    id: 2,
    userName: "Tania Bradshaw",
    password: "CBA",
  },
  {
    id: 3,
    userName: "Damien Paulister",
    password: "123",
  },
];

const passport = require("passport");
const passportJWT = require("passport-jwt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY || "your-secret-key";
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(passport.initialize());

const JWTstrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  new JWTstrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: SECRET_KEY,
    },
    (jwtPayload, done) => {
      const user = users.find((user) => user.id === jwtPayload.sub);

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    }
  )
);

app.post("/login", (request, response) => {
  const { userName, password } = request.body;
  const user = users.find((user) => user.userName === userName && user.password === password);

  if (user) {
    const payload = { sub: user.id, userName: user.userName };
    const token = jwt.sign(payload, SECRET_KEY);
    response.json({ token: token });
  } else {
    response.status(401).json({ message: "Authentication failed" });
  }
});

app.get("/protected", passport.authenticate("jwt", { session: false }), (request, response) => {
  response.json({ message: "Protected route accessed successfully" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


app.get("/", (request, response) => {
  response.send("<h1>Welcome to the homepage!</h1>");
});


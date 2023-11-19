const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(express.json());

/* app.use(
  express.urlencoded({
    extended: true,
  })
); */

/* app.post("/post", (req, res) => {
  const { name } = req.body;
  res.send(`1 ${name}`);
}); */
/* app.post("/post2", (req, res) => {
  const result = {
    code: 1,
    message: "Hello",
  };
  res.send(result);
}); */

app.post("/post3", (req, res) => {
  console.log(req.body);
  const result = req.body.value;
  console.log(result);

  if (result == 1) {
    console.log("hello2");
    res.send("hello");
  }
  if (result == 2) {
    console.log("world2");
    res.send("world");
  }
  if (result == 3) {
    console.log("!");
    res.send("!");
  }
});

/* ---------------------------------------------------------- */
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/", function (req, res) {
  res.send("Got a POST request");
});
app.delete("/user", function (req, res) {
  res.send("Got a DELETE request at/user");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*
post요청
body 1 hello
     2 world
     3 !
*/

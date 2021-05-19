// const  destinations  = require("./db.js").destinations;
let { destinations } = require("./db.js");

const express = require("express");

const { generateUID } = require("/services");

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("david app is listening");
});

app.get("/destinations", (req, res) => {
  res.send("david .....");
});

// CRUD = create, read, update, delete
// POST = GET - PUT - DELETE
// POST => CREATE
// Expecting the client to send us an object
// {name, photo, location, description}
// name and location are required
app.post("/destinations", (req, res) => {
  // req.query.search
  const { name, location, photo, description } = req.body;

  // validate that we have name and a location
  if (
    name === undefined ||
    name.length === 0 ||
    location === undefined ||
    location.length === 0
  ) {
    return res.status(400).send({ error: "name and location are required" });
  }

  // add the user data in my db
  destinations.push({
    id: generateUID(),
    name: name,
    location: location,
    photo: photo ? photo : "",
    description: description ? description : "",
  });

  res.send({ status: "success" });

  // make sure that you are noot putting anything else other than {name, location, photo, description}

  res.send("post route is being sent");
});

// DELETE /destination:uid

// app.delete("/destinations/:id", (req, res) => {
//   const { id } = req.params.id;

//   const filtered = destinations.filter((dest) => {
//     if (dest.id !== id) {
//       return true;
//     }
//   });

//   destinations = filtered;

//   res.send({ status: "success" });
// });

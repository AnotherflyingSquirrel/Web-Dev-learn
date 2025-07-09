import express from "express";

const port = 3000;
const myTwitterProfile = "AFlyingSquirrel@X.com";
const app = express();

const teaList = [];
let nextID = 0;
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello from shailesh and his tea!");
});
app.get("/twitter", (req, res) => {
  res.send(`${myTwitterProfile}`);
});

// add a new tea item
app.post("/teas", (req, res) => {
  if (!req.body) {
    res.statusCode = 400;
    return res.send("NO TEA OBJECT POSTED!");
  }

  const teaName = req.body.name;
  const price = req.body.price;
  const newTea = { id: nextID++, tea_name: teaName, price: price };
  teaList.push(newTea);
  res.statusCode = 201;
  res.send(newTea);
});

// get all tea items as an array
app.get("/teas", (req, res) => {
  res.statusCode = 200;
  res.send(teaList);
});

// update tea item by its id
app.put("/teas/:id", (req, res) => {
  const teaID = parseInt(req.params.id);
  const teaItem = teaList.find((t) => {
    return t.id === teaID;
  });
  if (!teaItem) {
    res.statusCode = 401;
    return res.send(
      "Tea item not found! Please recheck id of tea item requested"
    );
  }
  teaItem.price = req.body.price;
  teaItem.tea_name = req.body.name;
  res.statusCode = 200;
  res.send(teaItem);
});

// get tea item by id
app.get("/teas/:id", (req, res) => {
  const teaID = parseInt(req.params.id);
  const teaIndex = teaList.findIndex((t) => {
    return t.id === teaID;
  });

  if (teaIndex < 0) {
    res.statusCode = 401;

    return res.send(
      "Tea item not found! Please recheck id of tea item requested"
    );
  }
  res.statusCode = 200;
  res.send(teaList[teaIndex]);
});

// delete item by id
app.delete("/teas/:id", (req, res) => {
  const teaID = parseInt(req.params.id);
  const teaIndex = teaList.findIndex((t) => {
    return t.id === teaID;
  });
  if (teaIndex < 0) {
    res.statusCode = 401;
    return res.send(
      "Tea item not found! Please recheck id of tea item requested"
    );
  }
  // const tea = teaList[teaIndex];
  teaList.splice(teaIndex, 1);
  res.statusCode = 200;
  res.send("Item deleted");
});

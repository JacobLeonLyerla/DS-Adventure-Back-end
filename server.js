// import in modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ItemsRouter = require("./things/itemsRouter")
const PlayerRouter = require("./Characters/playerRouter")
const BHRouter = require("./Locations/bhRouter")
const MonsterRouter =require("./Characters/monsters/monsterRouter")
const AttackRouter = require("./Characters/abilities/attackRouter")
const TempRouter = require("./Characters/tempStats/tempRouter")
const { username, password } = require("./dontlook");

const server = express();
server.use(cors());
server.use(express.json());

server.use("/players",PlayerRouter)
server.use("/items",ItemsRouter)
server.use("/blackheart", BHRouter)
server.use("/monsters",MonsterRouter)
server.use("/attacks",AttackRouter)
server.use("/temps",TempRouter)
mongoose
  .connect(`mongodb://${username}:${password}@ds255451.mlab.com:55451/ds`, { useNewUrlParser: true })
  .catch(err => {
    console.log("could not connect to mlab.com database", err);
  });

server.get("/", (req, res) => {
  res.status(200).json({ api: `the api is running on port ${port}` });
});

const port = process.env.PORT || 5500;

server.listen(port, () => console.log(`\n=== api is up on port: ${port} ==\n`));

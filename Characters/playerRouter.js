const router = require("express").Router();

const Player = require("./player");

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Player.findById(id)
    .populate("items gear currentLocation attacks currentBattle")
    .then((response) => {
      res.status(202).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;

  const update = req.body;

  const options = {
    new: true,
  };

  Player.findByIdAndUpdate(id, update, options)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/", (req, res) => {
  Player.find()
    .sort("-created")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/", (req, res) => {
  const player = new Player(req.body);

  player
    .save()
    .then((response) => {
      res.status(201).json(response);
    })

    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;

const router = require("express").Router();

const Items = require("./Items");

router.get("/:id", (req, res) => {
  const {
    id
  } = req.params;

  Items.findById(id)
    .then(response => {
      res.status(202).json(response);
    })
    .catch(() => {
      res.status(500).json;
    });
});

router.put("/:id", (req, res) => {
  const {
    id
  } = req.params;

  const update = req.body;

  const options = {
    new: true
  };

  Items.findByIdAndUpdate(id, update, options)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

router.get("/", (req, res) => {
  Items.find()
    .sort("-created")
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

router.post("/", (req, res) => {
  const items = new Items(req.body);

  items
    .save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
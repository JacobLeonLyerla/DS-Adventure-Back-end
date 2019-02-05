const router = require("express").Router();

const Area = require("./area");

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Area.findById(id)
    .populate("items north south east west monsters")
    .then(response => {
      res.status(202).json(response);
    })
    .catch(err => {
      res.status(500).json;
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;

  const update = req.body;

  const options = {
    new: true
  };

  Area.findByIdAndUpdate(id, update, options)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.get("/", (req, res) => {
  Area.find()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.post("/", (req, res) => {
  const area = new Area(req.body);

  area
    .save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;

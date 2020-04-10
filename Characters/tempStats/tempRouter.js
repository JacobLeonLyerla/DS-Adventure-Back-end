const router = require("express").Router();

const Temp = require("./temp");

// add endpoints here
router
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    Temp.findById(id)
      .then((response) => {
        res.status(202).json(response);
      })

      .catch(() => {
        res.status(500).json({
          errorMessage: "The Temp information could not be retrieved.",
        });
      });
  })

  .delete((req, res) => {
    const { id } = req.params;
    Temp.findByIdAndRemove(id).then(() => {
      res.status(204).end();
    });
  })

  .put((req, res) => {
    const { id } = req.params;
    const update = req.body;
    const options = {
      new: true,
    };
    Temp.findByIdAndUpdate(id, update, options).then((response) => {
      res.status(200).json(response);
    });
  });

router.get("/", (req, res) => {
  Temp.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        err: "The collection of Temp could not be obtained.",
      });
    });
});

router.post("/", (req, res) => {
  const temp = new Temp(req.body);
  temp
    .save()
    .then((response) => {
      res.status(201).json(response);
    })
    .catch(() => {
      res.status(500).json({
        err:
          "This response could not be added check their status and try again.",
      });
    });
});

module.exports = router;

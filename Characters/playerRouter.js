const router = require('express').Router();

const Player = require('./player')

router.get("/:id",(req,res)=>{
    const id = req.params
    Player
    .findById(id)
    .then(response=>{
        res.status(202).json(response);
    }).
catch(err=>{
    res.status(500).json
})
})
router
.get("/",(req,res)=>{
    Player
    .find()
    .sort('-created')
    .then(response=>{
        res.status(200).json(response)
    })
    .catch(err=>{
        res.status(500).json({error:err})
    })
})

router
.post('/',(req,res)=>{
    const player = new Player(req.body)
    player
    .save()
    .then(response=>{
        res.status(201).json(response)
    })
    .catch(err=>{
        res.status(500).json({error:err})
    })
})
module.exports = router;
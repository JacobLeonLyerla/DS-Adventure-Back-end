const router = require('express').Router();

const Attack = require('./attack')

router.get("/:id",(req,res)=>{
    const {id} = req.params
    Attack
    .findById(id).populate('items gear currentLocation')
    .then(response=>{
        res.status(202).json(response);
    }).
catch(err=>{
    res.status(500).json
})
})
router.put("/:id",(req,res)=>{
    const{id} = req.params
    const update = req.body
    const options ={
        new:true
    }
    Attack
    .findByIdAndUpdate(id,update,options)
    .then(response=>{
        res.status(200).json(response)
    })
    .catch(err=>{
        res.status(500).json({error:err})
    })
})
router
.get("/",(req,res)=>{
    Attack
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
    const attack = new Attack(req.body)
    attack
    .save()
    .then(response=>{
        res.status(201).json(response)
    })
    .catch(err=>{
        res.status(500).json({error:err})
    })
})
module.exports = router;
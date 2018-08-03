const router = require('express').Router();

const Monster = require('./monster')

router.get("/:id",(req,res)=>{
    const {id} = req.params
    Monster
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
    Monster
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
    Monster
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
    const Monster = new Monster(req.body)
    monster
    .save()
    .then(response=>{
        res.status(201).json(response)
    })
    .catch(err=>{
        res.status(500).json({error:err})
    })
})
module.exports = router;
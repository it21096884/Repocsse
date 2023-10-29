const express = require('express')
var router = express.Router()
var ObjectID= require('mongoose').Types.ObjectId

var { Order } = require('../models/Order')

router.get('/',(req,res)=>{
    Order.find((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

router.get('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    Order.findById(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

router.post('/',(req,res)=>{
    var newRecord= new Order({
        itemName: req.body.itemName,
        quantity: req.body.quantity,
        supplier: req.body.supplier,
        site: req.body.site,
        status: req.body.status,
        description: req.body.description
    })

    newRecord.save((err,docs)=>{
        if(!err){
            console.log(docs)
            res.status(200).send(docs)
        }else{
            console.log(err)
            res.status(400).send(err)
        }
    })
})

router.put('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    var updateRecords={
        itemName: req.body.itemName,
        quantity: req.body.quantity,
        supplier: req.body.supplier,
        site: req.body.site,
        status: req.body.status,
        description: req.body.description
    }

    Order.findByIdAndUpdate(req.params.id, { $set: updateRecords},{new:true}, (err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

router.delete('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    Order.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

module.exports = router
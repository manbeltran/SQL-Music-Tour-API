const stages = require('express').Router()
const { Router } = require('express')
const db = require('../models')
const { Stage, Model  } = db


//find all stages
stages.get("/", async (req, res) => {
    try {
        const foundStages = await Stage.findAll({
            order: [ [ "stage_id", "ASC" ] ]
        });
        res.status(200).json(foundStages);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get stage by id
stages.get("/:name", async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_name: req.params.name },
            include: {
                model: Event,
                as: "events"
            }
        });
        res.status(200).json(foundStage);
    } catch (err) {
        res.status(500).json(err);
    }
});

//add new stage
stages.post("/", async (req, res) => {
    try {
        const newStage = await Stage.create(req.body);
        res.status(200).json({
            message: "Sucesfully inserted a new band",
            data: newStage
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//update stage info
stages.put("/:name", async (req, res) => {
    try {
        const updatedStages = await Stage.update(req.body, {
            where: { stage_id: req.params.id }
        });
        res.status(200).json({
            message: `Succesfuly updated ${updatedStages} stage(s)`
        }) 
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete stage
stages.delete("/:id", async (req, res) => {
    try {
        const deletedStages = await Stage.destroy({
            where: { stage_id: req.params.id }
        });
        res.status(200).json({
            message: `Succesfuly deleted ${deletedStages} stage(s)`
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

//export
module.exports = stages;
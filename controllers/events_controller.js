// Dependencies
const events = require('express').Router()
const { Router } = require('express')
const db = require ('../models')
const band = require('../models/band')
const { Event } = db

events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [['start_time', 'ASC']],
            where: {
                name: {[Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            }
        })
        res.status(200).json(foundEvents)
    } catch(error) {
        res.status(500).json(error)
    }
})

//find specific event
events.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { event_id: req.params.id }
        })
        res.status(200).json(foundEvent)
    } catch (error) { 
        res.status(500).json(error)
    }
})

//create a band
events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Sucessfully created a new event',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(erer)
    }
})

//update an event

events.put('/:id', async (req,res) => {
    try {
        const updatedEvents = await Event.update(req.body, {
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} event(s)    `
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//delete an event

events.delete('/:id', async (req, res) => {
    try {
        const deletedEvent = await Event.destroy ({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvent}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//export
module.exports = events
const express = require('express')
const Entrepreneur = require('../models/entrepreneur')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const { category } = req.query
        if (category) {
            const entrepreneurs = await Entrepreneur.find({ category })
            if (entrepreneurs.length)
                return res.json(entrepreneurs)
        }
        const entrepreneurs = await Entrepreneur.find()
        return res.json(entrepreneurs)

    } catch (e) {
        console.log(e)
        res.sendStatus(400)
    }
})

//will redirect to /blogs?category=${searchString}

router.post('/search', async (req, res) => {
    try {
        const { category } = req.body
        if (!category)
            return res.redirect('/entrepreneurs')

        res.redirect(`/entrepreneurs?category=${category}`)
    } catch (e) {
        console.log(e)
        res.sendStatus(400)
    }
})

//displays indivual blog and tracks views

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const entrepreneur = await Entrepreneur.findById(id)
        let views = entrepreneur.views + 1
        const updatedEntrepreneur = await Entrepreneur.findByIdAndUpdate(id, { views })
        updatedentrepreneur.save()
        res.json(updatedEntrepreneur)
    } catch (e) {
        console.log(e)
        res.redirect('/entrepreneurs')
    }
})

//updates likes but adds but will add unnecessary views

router.post('/:id/like', async (req, res) => {
    try {
        const { id } = req.params
        const entrepreneur = await Entrepreneur.findById(id)
        let likes = entrepreneur.likes + 1
        const updatedEntrepreneur = await Entrepreneur.findByIdAndUpdate(id, { likes })
        updatedEntrepreneur.save()
        res.redirect(`/entrepreneurs/${id}`)
    } catch (e) {
        console.log(e)
        res.redirect('/entrepreneurs')
    }
})

module.exports = router
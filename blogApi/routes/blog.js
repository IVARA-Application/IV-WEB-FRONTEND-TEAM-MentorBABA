const express = require('express')
const Blog = require('../models/blog')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const { category } = req.query
        if (category) {
            const blogs = await Blog.find({ category })
            if (blogs.length)
                return res.json(blogs)
        }
        const blogs = await Blog.find()
        return res.json(blogs)

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
            return res.redirect('/blogs')

        res.redirect(`/blogs?category=${category}`)
    } catch (e) {
        console.log(e)
        res.sendStatus(400)
    }
})

//displays indivual blog and tracks views

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const blog = await Blog.findById(id)
        let views = blog.views + 1
        const updatedBlog = await Blog.findByIdAndUpdate(id, { views })
        updatedBlog.save()
        res.json(updatedBlog)
    } catch (e) {
        console.log(e)
        res.redirect('/blogs')
    }
})

//updates likes but adds but will add unnecessary views

router.post('/:id/like', async (req, res) => {
    try {
        const { id } = req.params
        const blog = await Blog.findById(id)
        let likes = blog.likes + 1
        const updatedBlog = await Blog.findByIdAndUpdate(id, { likes })
        updatedBlog.save()
        res.redirect(`/blogs/${id}`)
    } catch (e) {
        console.log(e)
        res.redirect('/blogs')
    }
})

module.exports = router
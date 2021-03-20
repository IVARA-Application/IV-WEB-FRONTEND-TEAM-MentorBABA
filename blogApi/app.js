if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Blog = require('./models/blog')
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/blog'

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Database connected!')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/feed', async (req, res) => {
    //
})

//Works for manual and category search
//blogs?category=edtech

app.get('/blogs', async (req, res) => {
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

app.post('/search', async (req, res) => {
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

app.get('/blogs/:id', async (req, res) => {
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

app.post('/blogs/:id/like', async (req, res) => {
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

app.get('/', (req, res) => {
    console.log('Home')
})

app.listen(4000, () => {
    console.log('server running')
})




//user based feed
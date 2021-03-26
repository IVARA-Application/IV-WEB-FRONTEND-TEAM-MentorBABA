const mongoose = require('mongoose');
const Blog = require('./models/blog');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/blog';
const title = ['The best blog ever', 'Jk this one is the best', 'Nah this one is', 'Kinda lame blog', 'Tesla goes brr']
const views = [12, 29, 33, 45, 51, 100]
const likes = [18, 20, 38, 45, 52, 63, 75, 100]
const author = ['Elon Chacha', 'Mark Mama', 'Sundar Bhaiya', 'Cheems Doge']
const category = ['fintech', 'edtech', 'it', 'automobile', 'civil', 'biotech', 'covid']

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected!');
});

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]

const seedDB = async () => {
    await Blog.deleteMany({});

    for (let i = 0; i < 10; i++) {

        let categories = []
        let times = Math.floor((Math.random() * 3) + 1)
        while (times--) {
            categories.push(sample(category))
        }

        const blog = new Blog({
            title: `${sample(title)}`,
            views: `${sample(views)}`,
            likes: `${sample(likes)}`,
            author: `${sample(author)}`,
            category: categories,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis maxime labore eligendi soluta adipisci vel ipsa perspiciatis perferendis iste ullam.Suscipit nobis accusamus tenetur at architecto accusantium facere odit ducimus?',
        });
        await blog.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})

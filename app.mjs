import express from 'express';
import connectToDatabaase from './helpers.mjs'

const app = express()

app.get('/', (req, res) => {
    res.send('<h2>Hi there!</h2>');
})

await connectToDatabaase()

app.listen(3000);
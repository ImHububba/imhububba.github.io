// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/forum', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// User Schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});
const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            username: req.body.username,
            password: hashedPassword
        });
        await user.save();
        res.status(201).send('User created successfully.');
    } catch (error) {
        res.status(500).send('Error creating user.');
    }
});

app.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(404).send('User not found.');
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(401).send('Invalid password.');
    }

    const token = jwt.sign({ userId: user._id }, 'secretkey');
    res.status(200).send({ token });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM person');
        res.json(result.rows);
    } catch (err) {
        console.error('Error: ', err);
        res.status(500).send('Internal Server Error');
    }
})

// LOGIN
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return {
            code: 400,
            message: 'Invalid body'
        }
    }
    try {
        const existingUser = await db.query("SELECT * FROM person WHERE email = $1 AND password = $2", [email, password]);
        if (existingUser.rows && existingUser.rows === 0) {
            res.status
        };
        res.json(existingUser.rows[0])
    } catch (err) {
        console.error('Error: ', err);
        res.status(500).send('Internal Server Error');
    }
})


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
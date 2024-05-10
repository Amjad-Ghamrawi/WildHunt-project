const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wlidhunt'
});

app.post('/check-email', (req, res) => {
    const { email } = req.body;
    const sqlCheckEmail = "SELECT COUNT(*) AS count FROM users WHERE email = ?";
    db.query(sqlCheckEmail, [email], (err, result) => {
        if (err) {
            console.error("Error checking email:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        if (result[0].count > 0) {
            
            return res.status(409).json({ error: "Email is already in use" });
        }
        
        res.status(200).json({ success: true });
    });
});

app.post('/signup', (req, res) => {
    const { name, age, email, password } = req.body;
    const sql = "INSERT INTO users (name, age, email, password) VALUES (?, ?, ?, ?)";
    const values = [name, age, email, password];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Error inserting into database:", err);
            res.status(500).json({ error: "Internal Server Error" });
        } else {
            console.log("Inserted into database:", data);
            res.json({ success: true });
        }
    });
});
app.post('/upload-location', (req, res) => {
    console.log('Received POST request at /upload-location'); 
    const { targetName, category, latitude, longitude } = req.body;

    if (!targetName || !category || !latitude || !longitude) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const sql = "INSERT INTO location (target, category, latitude, longitude) VALUES (?, ?, ?, ?)";
    const values = [targetName, category, latitude, longitude];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error inserting into database:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        
        console.log("Location inserted into database:", result);
        res.json({ success: true });
    });
});

const bcrypt = require("bcrypt");

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    console.log('Received login request with email:', email);

    
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        
        if (results.length === 0) { 
            console.log('User with email', email, 'not found');
            return res.status(401).json({ error: 'Email or password is incorrect' });
        }

        const user = results[0];

        
        if (password !== user.password) {
            console.log('Incorrect password for user with email:', email);
            return res.status(401).json({ error: 'Email or password is incorrect' });
        }

        console.log('Login successful for user with email:', email);

        
    });
});



app.listen(8081, () => {
    console.log("Listening on port 8081...");
});

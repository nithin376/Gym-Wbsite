import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { query } from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const { json } = bodyParser;

app.use(cors());
app.use(json()); 

app.post('/api/register', async (req, res) => {
  const { name, email, phone, age ,selectedplan,date} = req.body;

  if (!name || !email || !phone || !age || !selectedplan ||!date) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  try {
    const existingUser = await query('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    const newUser = await query(
      'INSERT INTO users (name, email, phone, age,selectedplan,date) VALUES ($1, $2, $3, $4,$5,$6) RETURNING *',
      [name, email, phone, age,selectedplan,date]
    );
    res.status(201).json({ message: 'User registered successfully', user: newUser.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

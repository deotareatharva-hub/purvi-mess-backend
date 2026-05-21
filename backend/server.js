const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 1. Connect to MongoDB — paste your Atlas connection string below
const MONGO_URL = 'mongodb+srv://purviAdmin:oi21POWMwxpm9rJN@cluster0.vyhfxpx.mongodb.net/?appName=Cluster0';

mongoose.connect(MONGO_URL)
  .then(() => console.log('✅ Connected to MongoDB!'))
  .catch(err => console.log('❌ DB Error:', err));

// 2. Define what a Feedback document looks like
const feedbackSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  college:   { type: String, default: 'Arvi' },
  rating:    { type: Number, min: 1, max: 5 },
  text:      { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const Feedback = mongoose.model('Feedback', feedbackSchema);

// 3. API Routes

// GET /api/feedback — fetch all feedbacks (newest first)
app.get('/api/feedback', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch feedbacks' });
  }
});

// POST /api/feedback — save a new feedback
app.post('/api/feedback', async (req, res) => {
  try {
    const fb = await Feedback.create(req.body);
    res.json(fb);
  } catch (err) {
    res.status(400).json({ error: 'Could not save feedback' });
  }
});

// Start server on port 5000
app.listen(5000, () => {
  console.log('🚀 Purvi Mess server running at http://localhost:5000');
});
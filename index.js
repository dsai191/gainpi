const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Optional: route for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ Use Render's dynamic port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`GainPi server running on port ${PORT}`);
});
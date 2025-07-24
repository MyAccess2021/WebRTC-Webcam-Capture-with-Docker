const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 80;
const SNAPSHOT_DIR = path.join(__dirname, 'snapshots');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '10mb' }));

// Ensure snapshots folder exists
if (!fs.existsSync(SNAPSHOT_DIR)) {
  fs.mkdirSync(SNAPSHOT_DIR);
}

app.post('/upload', (req, res) => {
  const { image } = req.body;
  const base64Data = image.replace(/^data:image\/png;base64,/, '');
  const filename = `snapshot-${Date.now()}.png`;
  const filepath = path.join(SNAPSHOT_DIR, filename);

  fs.writeFile(filepath, base64Data, 'base64', err => {
    if (err) {
      console.error('❌ Failed to save snapshot:', err);
      return res.status(500).send('Error saving image');
    }
    console.log('✅ Saved snapshot:', filename);
    res.send({ success: true, filename });
  });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Placeholder - will configure n8n via VPS later');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

const cors = require('cors');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  optionsSuccessStatus: 200,     // CORS 프리플라이 옵션
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Github finder!');
});

app.get('/api/github/:username', async (req, res) => {
  try {
    const { username } = req.params;
    console.log(`Request received for username: ${username}`);

    const profileResponse = await axios.get(`https://api.github.com/users/${username}`, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
      },
    });

    const repoResponse = await axios.get(`https://api.github.com/users/${username}/repos`, {
      params: {
        per_page: 5,
        sort: 'created: asc',
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
      },
    });

    res.json({
      profile: profileResponse.data,
      repos: repoResponse.data,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

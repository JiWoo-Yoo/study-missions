const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: ['http://127.0.0.1:5500', 'http://127.0.0.1:5501'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Github finder!');
});

let count = 0;
app.get('/api/github/:username', async (req, res) => {
  try {
    const { username } = req.params;
    console.log(`${++count}st Request received for username: ${username}`);

    // Rate Limit 확인
    const rateLimitResponse = await axios.get('https://api.github.com/rate_limit', {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
      },
    });
    console.log('Rate Limit:', rateLimitResponse.data);

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
    console.error('Error fetching data from GitHub API:', error.message);
    if (error.response && error.response.status === 403) {
      res.status(403).json({ message: 'GitHub API Rate Limit exceeded or authentication failed' });
    } else {
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

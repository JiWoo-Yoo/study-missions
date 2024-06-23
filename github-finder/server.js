const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/api/github/:username', async (req, res) => {
  try {
    const { username } = req.params;

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
  console.log(`Server running on port ${PORT}`);
});

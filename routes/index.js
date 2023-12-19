var express = require('express');
var router = express.Router();

require('dotenv').config();

const {
  getGitHubRepos
} = require('../middlewares/github-api');

router.get('/', async (req, res) => {
  try {
    const githubRepos = await getGitHubRepos();
    res.render('index', {
      GITHUB_TOKEN: process.env.GITHUB_TOKEN,
      GITHUB_REPOS: githubRepos,
    });
  } catch (error) {
    console.error('Hata:', error);
    res.status(500).send('Sunucu hatası');
  }
});

module.exports = router;

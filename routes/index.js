const express = require('express');
const fs = require('fs');
const ytdl = require('ytdl-core');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YouTube Downloader' });
});

module.exports = router;

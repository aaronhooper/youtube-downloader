const express = require('express');
const fs = require('fs');
const ytdl = require('ytdl-core');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YouTube Downloader' });
});

router.get('/download', function(req, res, next) {
  const url = req.query.url;
  const videoName = 'video.mp4';
  const writeStream = fs.createWriteStream(videoName);
  ytdl(url).pipe(writeStream);

  res.send('it worked!');
});

module.exports = router;

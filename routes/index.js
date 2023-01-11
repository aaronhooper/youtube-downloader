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
  const options = { filter: 'audioandvideo' };
  const videoName = 'video.mp4';
  res.setHeader('content-type', 'video/mp4');
  res.setHeader('content-disposition', `attachment; filename="${videoName}"`);
  ytdl(url, options).pipe(res);
});

module.exports = router;

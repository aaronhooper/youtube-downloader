const express = require('express');
const ytdl = require('ytdl-core');
const router = express.Router();

router.get('/', function(req, res, next) {
  const url = req.query.url;
  const options = { filter: 'audioandvideo' };
  const videoName = 'video.mp4';
  res.setHeader('content-type', 'video/mp4');
  res.setHeader('content-disposition', `attachment; filename="${videoName}"`);
  ytdl(url, options).pipe(res);
});

module.exports = router;

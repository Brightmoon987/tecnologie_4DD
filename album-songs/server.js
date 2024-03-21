const express = require('express');
const songsData = require('./songs.json');

const app = express();


app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/song/:id', (req, res) => {
  const songId = req.params.id;
  const song = songsData.songs.find(song => song.song_id === songId);
  res.render('song', { song });
});








app.get('/api/album-songs', (req, res) => {
  res.json(songsData);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
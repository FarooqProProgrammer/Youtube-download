const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();


app.get('/download', (req,res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(URL, {
        format: 'mp4'
        }).pipe(res);
    });

app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});
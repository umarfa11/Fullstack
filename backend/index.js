const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Tampilkan Data')
});
app.post('/', function (req, res) {
    res.send('Tambahkan Data')
});
app.put('/', function (req, res) {
    res.send('Edit Data')
});
app.delete('/', function (req, res) {
    res.send('Hapus Data')
});

app.listen(3000)
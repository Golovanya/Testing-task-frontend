import express from 'express';
import cors from 'cors';
import fs from "fs";
import csv from 'csv-parser'

const app = express()

const port = 3000
app.use(cors());
let results = []
fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('error', (error) => {
    console.error('Error reading CSV file:', error);
  });

app.get('/data', (req, res) => {
  if (results.length === 0) {
    return res.status(500).send('No data');
  }
  res.send(results);
});
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`)
})
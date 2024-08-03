import express from 'express';
import cors from 'cors';
import fs from "fs";
import path from 'path';
import csv from 'csv-parser'


const app = express()



const port = 3000
app.use(cors());
  let results = []
  fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
 
  });
  app.get('/data', (req, res) => {
    res.send(results);
  });
  app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`)
  })
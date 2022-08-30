//import express from 'express';
//import cors from 'cors';

import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'rds-mysql-tripsestimator.cqcq1fbhm4jq.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'jonathanvegas',
  database: 'dbtripsestimator',
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.query('SELECT * FROM tb_tripsInfo WHERE user_id = "jonveg"', 
function (err, res, fields) {
  if (err) {
    console.error('Query error: ' + err.message);
    return;
  }
  //console.log(res)
  Object.keys(res).forEach(function(key) {
    let row = res[key];
    console.log(row.zipOrigin) 
  });
});

connection.end();

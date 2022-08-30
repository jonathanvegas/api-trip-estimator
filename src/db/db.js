import mysql from 'mysql2';
import { db } from './dbsecrets.js';

const pool = mysql.createPool(db);
const connection = pool.promise();

// connection.connect(function(err) {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }

//   console.log('Connected to database.');
// });

export default connection;

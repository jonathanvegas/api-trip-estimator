import mysql from 'mysql2';
import { db } from './dbsecrets.js';

const pool = mysql.createPool(db);
const connection = pool.promise();

export default connection;

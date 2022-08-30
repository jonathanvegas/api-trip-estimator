import connection from "../db/db.js";

async function getDataTrips(response) {
  let sql = 'SELECT * FROM tb_tripsInfo';


  const [rows,fields] =  await connection.query(sql); 
  return rows;

// uncomment this out for the other way
  // connection.query(sql, (err,data, fields) => {
  //   if (err) {
  //     console.error(err.message)
  //     return
  //   }
  //   console.log('getDataTrips', data)
  //   res.status(200).send(data);
  // })
 };

export default getDataTrips;

// connection.query('SELECT * FROM tb_tripsInfo', 
// function (err, res, fields) {
//   if (err) {
//     console.error('Query error: ' + err.message);
//     return;
//   }
//   console.log(res)
//   Object.keys(res).forEach(function(key) {
//     let row = res[key];
//     console.log(row.zipOrigin) 
//   });
// });
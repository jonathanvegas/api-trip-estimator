import connection from "../db/db.js";

export const getDataTrips =  async (res) => {
  let sql = 'SELECT * FROM tb_tripsInfo';
  const [rows,fields] =  await connection.query(sql); 
  return rows;
 };

 export const getDataTripsUser =  async (user_id, trips) => {
  let sql = `SELECT * FROM tb_tripsInfo WHERE user_id = '${user_id}'`;
  const [rows,fields] =  await connection.query(sql); 
  console.log(sql)
  return rows;
 };
 
 export const getDataTripsUserDates =  async (user_id, fromDate, toDate, trips) => {
  let sql = `SELECT *, DATE_FORMAT(date, "%m-%d-%Y") as dateFormat FROM tb_tripsInfo WHERE user_id = '${user_id}' AND date BETWEEN '${fromDate}' AND '${toDate}'`;
  const [rows,fields] =  await connection.query(sql); 
  return rows;
 }; 

export const insertTrip = async (newTrip) => {
  try{
    let sql = `INSERT INTO tb_tripsInfo (user_id, zipOrigin, cityOrigin, zipDestination, cityDestination, ` + 
              `tripMiles, status, date, rate) VALUES ('${newTrip.user_id}', '${newTrip.zipOrigin}', '${newTrip.cityOrigin}', ` +
              `'${newTrip.zipDestination}', '${newTrip.cityDestination}', ${newTrip.tripMiles}, '${newTrip.status}', ` +
              `'${newTrip.date}', ${newTrip.rate})`;
    console.log(sql)
    const [rows,fields] =  await connection.query(sql); 
    return rows;
  }
  catch{
    console.log(error);
  }
}  

export const updateTripUser = async (trips_id, newTrip, res) => {
  let sql = `UPDATE tb_tripsInfo SET zipOrigin = '${newTrip.zipOrigin}', cityOrigin = '${newTrip.cityOrigin}', ` + 
            `zipDestination = '${newTrip.zipDestination}', cityDestination = '${newTrip.cityDestination}', ` + 
            `tripMiles = ${newTrip.tripMiles}, status = '${newTrip.status}', date = '${newTrip.date}', ` +
            `rate = ${newTrip.rate} WHERE trips_id = ${trips_id}`;
  console.log(sql)
  const [rows,fields] =  await connection.query(sql); 
  return rows;
}  

export const deleteTripId =  async (trips_id, trips) => {
  let sql = `DELETE FROM tb_tripsInfo WHERE trips_id = ${trips_id}`;
  const [rows,fields] =  await connection.query(sql); 
  console.log(sql)
  return rows;
 };

export const getZipCodes = async (zipCode, res) => {
  let sql = `SELECT * from tb_zipCodes WHERE zipCode = '${zipCode}'`;
  const [rows,fields] =  await connection.query(sql); 
  return rows;
}

export const TripServices = { 
  getDataTrips, 
  getDataTripsUser,
  getDataTripsUserDates,
  insertTrip,
  updateTripUser,
  deleteTripId,
  getZipCodes
};
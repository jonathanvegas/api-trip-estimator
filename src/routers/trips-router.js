import { Router} from 'express';
import { getDataTrips, getDataTripsUser, getDataTripsUserDates , insertTrip, updateTripUser } from '../services/api-sql.js';

export const tripsRouter = Router();

tripsRouter.get('/', async (req, res) => {
  try {
    const dataSource = await getDataTrips(res);
    res.status(200).send(dataSource);
  } catch(err){
    console.error('Error while getting information ', err.message);
  }
});

tripsRouter.get('/:user_id', async (req, res) => {
  try {
    const dataSource = await getDataTripsUser(req.params.user_id, res);
    res.status(200).send(dataSource);
  } catch(err){
    console.error('Error while getting information ', err.message);
  }
});

tripsRouter.get('/:user_id/:fromDate/:toDate', async (req, res) => {
  try {
    const dataSource = await getDataTripsUserDates(req.params.user_id,req.params.fromDate, req.params.toDate, res);
    res.status(200).send(dataSource);
  } catch(err){
    console.error('Error while getting information ', err.message);
  }
});

tripsRouter.post('/', async function(req, res) {
  try {
    res.json(await insertTrip(req.body));
  } catch (err) {
    console.error('Error while creating trip ', err.message);
  }
});

tripsRouter.patch('/:trips_id', async (req, res) => {
  try {
    console.log(res);
    console.log(req.params.trips_id)
    const dataSource = await updateTripUser(req.params.trips_id, res);
    res.status(200).send(dataSource);
  } catch(err){
    console.error('Error while updating information ', err.message);
  }
});
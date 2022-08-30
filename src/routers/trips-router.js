import { Router} from 'express';
import getDataTrips from '../services/api-sql.js';

export const tripsRouter = Router();

tripsRouter.get("/", async (req, res) => {
  const dataSource = await getDataTrips(res);
  //coment this out for the other way
  res.status(200).send(dataSource);
  console.log('datasource: ', dataSource)
});
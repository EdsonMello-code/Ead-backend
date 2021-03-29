import express from 'express';
import routes from './routes';
import cors from 'cors';

import './database/connection'

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());

app.use(routes);
export default app;


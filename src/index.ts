import * as express from 'express';
import { sequelize } from '../models';

const HOST: string = 'localhost';
const PORT: number = 5000;
const app = express();

// Middleware Configuration
app.use(express.json());
app.use(
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {}
);

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Start!');
});

app.listen(5000, async () => {
  console.log(`Server Listening on ${HOST}:${PORT}`);

  await sequelize
    .authenticate()
    .then(async () => {
      console.log('Connection Success.');
    })
    .catch((e: any) => {
      console.log('TT : ', e);
    });
});

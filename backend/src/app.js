import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

import router from './routes.js';
app.use(router);

app.listen(3000, () => console.log('API RODANDO'))
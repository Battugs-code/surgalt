/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { expressMiddleware } from '@as-integrations/express4';
import express from 'express';
import * as path from 'path';
import { authRouter } from './modules/auth/authRouters';
import { classAdminApolloServer } from './modules/class-admin/apollo';
import fileUploadRouter from './modules/utils/file-upload/route';

const app = express();
await classAdminApolloServer.start();
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(express.json());
app.use(
  '/api/graphql',
  express.json(),
  expressMiddleware(classAdminApolloServer)
);

app.use('/api/file-upload', fileUploadRouter);

app.use('/api/auth', authRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

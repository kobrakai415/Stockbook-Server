import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import listEndpoints from 'express-list-endpoints';
import { unAuthorizedHandler, notFoundErrorHandler, badRequestErrorHandler, forbiddenErrorHandler, catchAllErrorHandler } from "./errorHandlers.js";




const server = express();

server.use(cors());
server.use(express.json());


server.use(unAuthorizedHandler);
server.use(notFoundErrorHandler);
server.use(badRequestErrorHandler);
server.use(forbiddenErrorHandler);
server.use(catchAllErrorHandler);


const port = process.env.PORT || 3001

mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true }).then(() => {
  console.log("Connected to mongo");
  server.listen(port, () => {
    console.table(listEndpoints(app));
    console.log("Server listening on port " + port);
  });
});
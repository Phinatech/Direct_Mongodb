import express, { Application } from "express";
import { MainApp } from "./App";

const app: Application = express();
const Port = 2267;

MainApp(app);

const server = app.listen(Port, () => {
  console.log("Server is listening on port " + Port);
});

process.on("uncaughtException", (err: Error) => {
  console.log("uncaughtException", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection", reason);

  server.close(() => {
    process.exit(1);
  });
});

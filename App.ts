import express, { Application, Response, Request } from "express";
import cors from "cors";
import morgan from "morgan";
const app: Application = express();

export const MainApp = (app: Application) => {
  try {
    app
      .use(cors({ origin: "*" }))
      .use(express.json())
      .use(morgan("dev"));

    app.get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({
          message: "Server is Up and running",
        });
      } catch (error) {
        res.status(404).json({
          message: "Error s",
        });
      }
    });
  } catch (error) {
    console.log("An error occured");
  }
};

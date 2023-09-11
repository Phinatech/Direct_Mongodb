import { Request, Response } from "express";
import { client, Db } from "../Config/dbConfig";

import moment from "moment";

//Read all Todos
export const getAllTodos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    await client.connect();

    let todo = await Db.find().toArray();

    return res.status(200).json({
      message: "Find todo",
      data: todo,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating",
    });
  }
};

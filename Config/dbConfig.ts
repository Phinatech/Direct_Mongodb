import { MongoClient } from "mongodb";

const LOCAL_URL: string = "mongodb://127.0.0.1:27017/ratingApp";

export const client = new MongoClient(LOCAL_URL);

const mainConnection = async () => {
  try {
    await client.connect();
    return `Connected to database`;
  } catch (error: any) {
    console.log(error.message);
  }
};

mainConnection()
  .then((res) => {
    console.log(res);
  })
  .catch(() => {
    console.error();
  })
  .finally(() => {
    client.close();
  });

export const Db = client.db("taskedDB").collection("Taskes");

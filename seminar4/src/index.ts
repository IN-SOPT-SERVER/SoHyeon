import express, { NextFunction, Request, Response } from "express";
import router from "./router";
import config from "./config";

const app = express(); // express 객체 받아옴

app.use(express.json()); // express 에서 request body를 json 으로 받아오겠다.

app.use("/api", router); // use -> 모든 요청
// localhost:8000/api -> api 폴더
// localhost:8000/api/user -> user.ts

//* HTTP method - GET
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("서버 연결");
});

app
  .listen(config.port, () => {
    console.log(`
    ################################################
          🛡️  Server listening on ${config.port} 🛡️
    ################################################
  `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });

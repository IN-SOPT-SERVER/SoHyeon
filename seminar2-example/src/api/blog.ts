import express, { Request, Response, Router } from "express";
import infos from "./data/members";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {

  return res.status(200).json({
    status: 200,
    message: "/api/blog 라우팅 성공",
    data: "blog.ts 페이지",
  });
});

module.exports = router;
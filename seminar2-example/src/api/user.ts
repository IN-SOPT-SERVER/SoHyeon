import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {

  return res.status(200).json({
    status: 200,
    message: "/api/user 라우팅 성공",
    data: "user.ts 페이지",
  });
});

module.exports = router;
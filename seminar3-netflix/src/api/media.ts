import express, { Request, Response, Router } from "express";
import content from "./data/content";

const router: Router = express.Router();

router.get("/1/detail", (req: Request, res: Response) => {

  return res.status(200).json({
    status: 200,
    message: "유저 조회 성공",
    data: content,
  });
});

module.exports = router;
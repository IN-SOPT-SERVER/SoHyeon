import express, { Router } from "express";

const router: Router = express.Router(); // express 라우팅 시스템을 받아올거!

router.use("/media", require("./media"));

module.exports = router; // 모듈로 반환
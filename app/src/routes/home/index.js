"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello); //output, process :home.ctrl.js 참고
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login1) //get(요청)->post(전송)
router.post("/register", ctrl.process.register1);

module.exports = router;

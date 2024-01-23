"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello); //output, process :home.ctrl.js 참고
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login); //get(요청)->post(전송)

module.exports = router;

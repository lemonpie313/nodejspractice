"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser"); //login.js의 데이터 전달에서 필요
const app = express();


//라우팅
const home = require("./src/routes/home");

//앱세팅
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.json()); //body parser 미들웨어 등록
//url통해 전달되는 데이터에 한글, 공백 등 같은 문자 포함될 경우 제대로 인식 안되는 문제 해결
app.use(bodyParser.urlencoded({ extended: true}));


app.use("/", home);

module.exports = app;
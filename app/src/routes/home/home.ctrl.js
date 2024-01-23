"use strict"

const output = { //hello, login을 output 객체로 묶음 

    hello : (req, res) => {
        res.render("home/index");
    },

    login : (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req,res) => {
        console.log(req.body); //login.js에서 body로 데이터 전달해서, body로 접근해야됨
    },
}

module.exports = {
    output,
    process,
}
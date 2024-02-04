"use strict"

const User = require("../../models/User");

const output = { //hello, login을 output 객체로 묶음 

    hello : (req, res) => {
        res.render("home/index");
    },

    login : (req, res) => {
        res.render("home/login");
    },
    register : (req, res) => {
        res.render("home/register");
    }
};

const process = {
    login1: async (req,res) => { // ** req.body : post 형식으로 넘어오는 파라미터 담음
        const user = new User(req.body); //req.body(입력된 id비번) > Users.js의 constructor(body)로 넘어감
        const response = await user.login2();
        return res.json(response);
    },

    register1: async (req,res) => { // ** req.body : post 형식으로 넘어오는 파라미터 담음
        const user = new User(req.body); //req.body(입력된 id비번) > Users.js의 constructor(body)로 넘어감
        const response = await user.register2();
        return res.json(response);
    },
};


module.exports = {
    output,
    process,
};
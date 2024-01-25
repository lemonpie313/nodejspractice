"use strict"

const UserStorage = require("../../models/UserStorage");

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
        const id = req.body.id, //login.js body에서 받아온 id, psword
        psword = req.body.psword;
        
        const users = UserStorage.getUsers("id","psword");
        const response = {};

        if (users.id.includes(id)){ //아이디 비번 일치여부 확인
            const idx = users.id.indexOf(id);
            if(users.psword[idx]==psword){
                response.success = true;
                return res.json(response);
            }
        }
        response.success = false;
        response.msg = "로그인 실패";
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
"use strict"

const output = { //hello, login을 output 객체로 묶음 

    hello : (req, res) => {
        res.render("home/index");
    },

    login : (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["aaa", "bbb", "ccc"],
    psword: ["1234","5678","9012"],
}; //아이디 비번

const process = {
    login: (req,res) => {
        const id = req.body.id, //login.js body에서 받아온 id, psword
        psword = req.body.psword;
        
        if (users.id.includes(id)){ //아이디 비번 일치여부 확인
            const idx = users.id.indexOf(id);
            if(users.psword[idx]==psword){
                return res.json({ //프론트엔드에 json객체로 응답
                    success : true,
                });
            }
        }
        return res.json({
            success : false,
            msg : "로그인 실패",
        });
    },
};

module.exports = {
    output,
    process,
};
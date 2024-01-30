"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body; // > new User(req.body) > 받은 id, psword가 여기 User.body로 들어감
    }

    login2() {
        const client = this.body;
        const { id, psword } = UserStorage.getUserInfo(client.id); //해당 유저 id, 비번 받아오기

        if (id){
            if (id === client.id && psword === client.psword){
                return {success : true };
            }
            return { success : false, msg : "비밀번호가 틀렸습니다." }
        }
        return { success : false, msg : "존재하지 않는 아이디입니다." }
    }

    register2() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;
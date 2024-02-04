"use strict";

const fs = require("fs").promises;

class UserStorage {
    static getUsers(...fields) {
        return fs.readFile("./src/databases/users.json")
        .then((data)=>{
            return this.#getUsers(data, fields);
        }) //해당로직(fs.readfile..)가 성공했을때 실행
        .catch((err) => console.error); //실패했을때 실행
    }


    static #getUsers(data, fields) {
        //if (isAll) return users;
        const users = JSON.parse(data);
        const newusers = fields.reduce((newusers, field) =>{
            if (users.hasOwnProperty(field)){
                newusers[field] = users[field];
            }
            return newusers;
        }, {});
        return newusers;
    }

    static getUserInfo(id) { //id에 해당하는 유저의 정보만 찾음
        return fs.readFile("./src/databases/users.json")
            .then((data)=>{
                return this.#getUserInfo(data, id);
            }) //해당로직(fs.readfile..)가 성공했을때 실행
            .catch((err) => console.error); //실패했을때 실행

    }

    static #getUserInfo(data, id) {
        const users = JSON.parse(data); //그냥 data로 적으면 16진수로 표기.
        const idx = users.id.indexOf(id);
        const userkeys = Object.keys(users); // => [id, psword, name]
        const userInfo = userkeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {})
        return userInfo; //이렇게하면 콜백함수가 반환되지 fs 메소드가 반환되는게 아님.
    }

    static async save(userInfo) {
        const users = await this.getUsers("id", "psword", "name");
        if (users.id.includes(userInfo.id)) {
            throw "이미 존재하는 아이디입니다.";
        }

        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);
        users.name.push(userInfo.name);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success : true };
    }
}



module.exports = UserStorage;
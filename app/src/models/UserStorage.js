"use strict";

class UserStorage {
    static #users = { //#: public -> private, 외부에서 못불러옴
        id: ["aaa", "bbb", "ccc"],
        psword: ["1234","5678","9012"],
        name: ["가","나","다"],
    }; //아이디 비번

    static getUsers(...fields) {
        const users = this.#users;
        const newusers = fields.reduce((newusers, field) =>{
            if (users.hasOwnProperty(field)){
                newusers[field] = users[field];
            }
            return newusers;
        }, {});
        return newusers;
    }

    static getUserInfo(id) { //id에 해당하는 유저의 정보만 찾음
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userkeys = Object.keys(users); // => [id, psword, name]
        const userInfo = userkeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {})
        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success : true };
    }
}

module.exports = UserStorage;
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
}

module.exports = UserStorage;
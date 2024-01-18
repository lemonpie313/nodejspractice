"use strict";

const id = document.querySelector("#id"), //#id:html에 input id로 부여된 'id'를 갖고오기
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login); //클릭하면 login 함수 실행

function login() {
    const req = {
        id : id.value,
        psword : psword.value,
    };
    console.log(req);

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req) //문자열로 변환
    })
}
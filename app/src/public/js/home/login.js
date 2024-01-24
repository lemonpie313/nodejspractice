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

    fetch("/login", {
        method: "POST", //Restful API 메소드
        headers: {
            "Content-Type": "application/json" //보내려는 콘텐츠 타입 
        },
        body: JSON.stringify(req), //문자열로 변환 후 데이터 전달
    }).then((res) => res.json()) //응답받은 데이터(받은 아이디 비번) 반환
    .then((res) => console.log(res)); //res.json() 반환값은 promise. then((res) => console.log(res.json()))의 경우 promise로 반환
} //따라서 promise 타입은 then으로 접근 가능.
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
    .then((res) => {
        if (res.success) {
            location.href = "/"; //로그인 성공 시 이동할 경로
        } else {
            alert(res.msg); //로그인 실패 시 팝업 메시지 (home.ctrl의 msg)
        }

    })
    .catch((err) => { //에러 발생할 경우 에러 처리
        console.error(new Error("로그인 중 에러 발생")); //new Error 없애기도 함 
    });
} 
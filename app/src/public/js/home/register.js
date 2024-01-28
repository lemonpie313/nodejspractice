"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register0);

function register0() {
    const req = {
        id : id.value,
        name : name.value,
        psword : psword.value,
        confirmPsword : confirmPsword.value,
    };

    fetch("/register", {
        method: "POST", //Restful API 메소드
        headers: {
            "Content-Type": "application/json" //보내려는 콘텐츠 타입 
        },
        body: JSON.stringify(req), //문자열로 변환 후 데이터 전달
    }).then((res) => res.json()) //응답받은 데이터 반환
    .then((res) => {
        if (res.success) {
            location.href = "/login"; //로그인 성공 시 이동할 경로
        } else {
            alert(res.msg); //로그인 실패 시 팝업 메시지 (home.ctrl의 msg)
        }

    })
    .catch((err) => { //에러 발생할 경우 에러 처리
        console.error(new Error("회원가입 중 에러 발생")); //new Error 없애기도 함 
    });
} 
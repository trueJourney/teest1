function clickButton() {
    alert("external방식!");
}

function darkMode() {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    document.querySelector("p").style.borderColor = "white";
}
function rightMode() {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
    document.querySelector("p").style.borderColor = "black";
}




// let variable; // 선언 및 초기화
// variable = 10; // 할당
// console.log(variable); // 참조

//var: ES6 이전에 사용된 변수 선언 키워드 // 재할당, 재선언 가능
//let: ES6부터 사용되는 변수 선언 키워드 // 재할당, 재선언 불가능
//const: ES6부터 사용되는 변수 선언 키워드, 변하지 않는 상수를 선언할 때 사용.// 재할당, 재선언 불가능

let ex02 = 10;
ex02
// let ex02 = 2;

const ex03 = 0;
// ex03 = 1;
// const ex03 = 0;

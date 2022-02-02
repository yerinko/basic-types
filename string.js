"use strict";
// string
// 다른 언어와 마찬가지로 텍스트 형식을 참조하기 위해 'string' 형식을 사용합니다.
// javascript와 마찬가지로 Typescript는
// 문자열 데이터를 둘러싸기 위해 큰 따옴표("")나, 작은 따옴표(')를 사용합니다.
let myName = "Mark";
myName = 'Anna';
// ES6부터 Template String 이 나왔습니다.
// 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
// 이 문자열은 backtick (=backquote) 기호에 둘러쌓여 있습니다.
// 포함된 표현식은 `{expr}`와 같은 형태로 사용합니다.
let fullName = 'Mark Lee';
let age = 39;
let sentence = `Hello, My name is ${fullName}.

I'll be ${age + 1} years old next month.`;
console.log(sentence);

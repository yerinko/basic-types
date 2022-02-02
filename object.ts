const person1 = { name: "Mark", age: 39 }

const person2 = Object.create({name: 'Mark', age: 39})

// object
// a type that represents the non-primative type
// "primitive type 이 아닌 것" 을 나타내고 싶을 떄 사용하는 타입

// non-primitive type
// not number, string, boolean, bigint, symbol, null, or undefined.

let testObj: object = {};
testObj = {name: 'Mark'};
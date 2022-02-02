// let MyName: string = null;

// let u: undefined = null;
let v: void = undefined;

let union: string | null = null; // union Type ( null과 문자열 다 가능 )

union = "Mark";

// null in Javascript
// null 이라는 값으로 할당된 거슬 null이라고 합니다.
// 무언가가 있는데, 사용할 준비가 덜 된 상태.
// null이라는 타입은 Null이라는 값만 가질 수 있습니다.
// 런타임에서 typeof 연산자를 이용해서 알아내면 object 입니다.

let n: null = null;
console.log(n); // null
console.log(typeof n); // object

// undefined in Javascript
// 값을 할당하지 않은 변수는 undefined라는 값을 가집니다.
// 무언가가 아예 준비가 안된 상태
// object의 property가 없을 때도 undefined입니다.
// 런타임에서 typeof 연산자를 이용해서 알아내면, undefined 입니다.
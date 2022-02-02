let x: [string, number];

x = ["hello", 39]; // 항상 같은 타입과 같은 길이여야합니다.

// x = [10, 'Mark']; // false

x[0] = "world";

const person: [string, number] = ["Mark", 39];

const [first, second] = person; // 분해할당
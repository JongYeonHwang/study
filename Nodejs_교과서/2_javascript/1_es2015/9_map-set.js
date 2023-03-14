'use strict';

const m = new Map();

m.set('a', 'b');                        // set(키, 값)을 Map에 속성 추가
m.set(3, 'c');                          // 문자열이 아닌 값을 키로 사용 가능하다
const d = {};
m.set(d, 'e');                          // 객체도 된다

m.get(d);                               // get(키)로 속성값 조회
console.log(m.get(d));                  // e

m.size;                                 // size로 속성 개수 조회
console.log(m.size);                    // 3

for (const [k, v] of m) {               // 반복문에 바로 넣어 사용 가능하다.
    console.log(k, v);                  // 'a', 'b', 3, 'c', {}, 'e'
}

m.forEach((v, k) => {                   // forEach 또한 사용 가능하다.
    console.log(k, v);                  // 결과는 위와 동일함
});

m.has(d);
console.log(m.has(d));                  // has(키)로 속성 존재 여부를 확인한다.

m.delete(d);                            // delete(키)로 속성을 삭제합니다.
m.clear();                              // clear()로 전부 제거합니다.
console.log(m.size);                    // 0

// Map은 속성의 순서를 보장하며 반복문을 사용 가능하다

const s = new Set();
s.add(false);
s.add(1);
s.add('1');
s.add(1);                               // 1은 중복이므로 무시된다.
s.add(2);

console.log(s.size);                    // 중복이 있기때문에 제거되어 4

s.has(1);                               // has(요소)로 요소 존재 여부를 확인한다.
console.log(s.has(1));                  // true

for(const a of s ){
    console.log(a);                     // false 1 '1' 2
}

s.forEach((a) => {
    console.log(a);                     // false 1 '1' 2
})

s.delete(2);                            // delete(요소)로 요소를 제거한다.
s.clear();                              // clesar()로 전부 제거한다.

const arr = [1, 3, 2, 7, 2, 6, 3, 5];

// const s = new Set(arr);
// const result = Array.from(s);
// console.log(result);                    // 1, 3, 2, 7, 6, 5

// 배열 생성 후 해당 배열을 새로운 set 객체를 만드는데 사용하면 만들어진 set 객체는 중복이 제거된 객체가 된다.
'use strict';

const dep1 = require('./dep1');
const dep2 = require('./dep2');

dep1();
dep2();


// 해당 동작을 하게되면 순환참조가 발생하는데 nodejs는 순환참조 시 순환참조되는 객체를 빈 객체로 만들고 error가 아닌 waring이 발생하기 때문에
// 순환참조가 발생하지 않도록 조심해야한다.
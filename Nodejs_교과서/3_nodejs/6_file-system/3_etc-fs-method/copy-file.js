'use strict';

const fs = require('fs').promises;

fs.copyFile('readme2.txt', 'writeme2.txt')
    .then(() => {
        console.log('복사 완료');
    })
    .catch((error) => {
        console.error(error);
    });
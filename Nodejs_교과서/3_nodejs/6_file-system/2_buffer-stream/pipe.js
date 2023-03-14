const fs = require('fs');

const readStream = fs.createReadStream('readme2.txt');
const writeStream = fs.createWriteStream('writeme.txt');
readStream.pipe(writeStream);
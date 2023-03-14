'use strict';

import { pipeline } from 'stream/promises';
import zlib from 'zlib';
import fs from 'fs';

const ac = new AbortController();
const signal = ac.signal;

setTimeout(() => ac.abort(), 1);            // 1ms 뒤에 중단
await pipeline(
    fs.createReadStream('./readme2.txt'),
    zlib.createGzip(),
    fs.createWriteStream('./readme2.txt.gz'),
    { signal },
);
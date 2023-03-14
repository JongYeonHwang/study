'use stict'

import { pipeline } from 'stream/promises';
import zlib from 'zlib';
import fs from 'fs';

await pipeline(
    fs.createReadStream('./readme2.txt'),
    zlib.createGzip(),
    fs.createWriteStream('./readme2.txt.gz'),
);
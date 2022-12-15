const { readFileSync, promises: fsPromises} = require('fs');


async function asyncReadFile(filename) {
    const contents = await fsPromises.readFile(filename, 'utf-8');
    const shapesArr = contents.split(/\r?\n/);
    console.log(shapesArr);
}

asyncReadFile('./input.txt');

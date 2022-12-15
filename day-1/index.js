const { readFileSync, promises: fsPromises} = require('fs');

async function asyncReadFile(filename) {
        const contents = await fsPromises.readFile(filename, 'utf-8');
        const elfArr = contents.split(/\r?\n/);
        // console.log(elfArr);

        let totals = [0]; // this is an array of all the elves with their
    // total # of calories they are carrying[50, 62522, 22990, 80000]
        for (const line of elfArr){
            if (line === ""){
                //new line, must be a new elf. Add the new elf to the array
                totals.push(0)
            } else {
                //number line. Each line that has a number within each block
                // gets added up to give the tottal for that block (elf)
                const parsedNum = parseInt(line);
                totals[totals.length-1] += parsedNum;
            }
        }

        //use our totals array and find whatever the largest number is in
    // that array
    const maxCalElf = Math.max(...totals);
        // console.log(maxCalElf);
    // console.log(totals)


    // part two...find the top 3 elves. Sort the array and return it from
    // largest to smallest
    const topElves = totals.sort((a,b) => (b - a));
    console.log(topElves);
    const foodElves = topElves.slice(0, 3);
    // console.log(foodElves);
    let packElves = 0;
    for (let elf in foodElves) {
        packElves += foodElves[elf];
        console.log(packElves);
    }
}
asyncReadFile('./calories.txt');

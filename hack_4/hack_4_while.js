/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let i = 1;
while(i <= 4){
    result.push(i*2-1)
    i++
}

//export result
module.exports = result;
/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
i = 1;
while(i <= 4){
    result.unshift(i*2-1)
    i++
}
console.log(result)

//export result
module.exports = result;
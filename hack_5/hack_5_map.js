/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let i = [1,2,3,4]

let arr = i.map(function(element){
    result.unshift(element*2-1)
});
//export result
module.exports = result;
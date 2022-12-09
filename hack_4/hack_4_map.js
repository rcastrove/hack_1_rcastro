/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let i = [1,2,3,4]

let arr = i.map(function(element){
    result.push(element*2-1)
});


//export result
module.exports = result;
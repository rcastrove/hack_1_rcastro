/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;
let resume = [];
let limit = arr.length;
let i = 0;
for(i; i < limit; i++){
    if(arr[i][0] === "b"){
        resume.push(i)
    }
}
result = resume.length;
console.log(result)
//export result
module.exports = result;
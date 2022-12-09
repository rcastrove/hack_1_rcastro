/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
let uarr = arr.map(function(i){
    result.push(i[0].toUpperCase()+i.slice(1))
})
console.log(result)
//export result
module.exports = result;
/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
let uarr = arr.map(i => i.replace("a","@"));
let limit = arr.length
let i = 1;
for(i; i < limit-2; i++){
        result.push(uarr[i])
}
result.push(arr[3].toUpperCase())
console.log(result)
//export result
module.exports = result;
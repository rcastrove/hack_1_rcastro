/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"];
let uArray = [];
let result = [];
numberArray.splice(0,1,"one");
numberArray.splice(2,1,"three");
numberArray.splice(4,1,"five");
numberArray.splice(0,0,"h@ck");
numberArray.push("h@ck");
let nsa = [stringArray[0].replace("oo","00"),stringArray[1][0].toUpperCase()+stringArray[1].slice(1),stringArray[2].replace("a","@"),stringArray[3].slice(0,2)+stringArray[3][2].toUpperCase(),stringArray[4][0].replace("e",3)+stringArray[4].slice(1).replace("o","0")];
result = [...numberArray,...nsa,"h@ck"];
console.log(result);
//export result
module.exports = result;
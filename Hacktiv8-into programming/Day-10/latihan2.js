// console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3

var arr = [' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'];
var tempo = [];
var tempx = [];
var jarak
var tempo1
var tempx1

for (i = 0; i < arr.length; i++) {

    if (arr[i] === 'o') {
        tempo.push(i);
    } else if (arr[i] === 'x') {
        tempx.push(i);
    }
}


tempo1 = tempo.join()
console.log(tempo1)

tempx1 = tempx.join()
console.log(tempx1)

jarak = (tempo1 - tempx1[0]) * -1


// console.log(tempo);
// console.log(tempx);
console.log(jarak);
// Diberikan sebuah function numberProcessing(numberArr) yang menerima satu parameter berupa array yang berisikan angka. Tentukan nilai minimum, maksimum, rata-rata (genapkan ke bilangan terdekat), bilangan ganjil dan bilangan genap.

// function numberProcessing(numberArr) {
//     //your code here
//    }

//    console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
//    // "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"

var arr = [1, 3, 5, 1, 2, 8, 10, 0, 3];
var sor = arr.sort((function (a, b) {
    return a - b
}));

var mean = (Math.floor(arr.length / 2))



console.log(sor);
console.log("Min : " + arr[0]);
console.log("Max : " + arr[8]);
console.log("Mean : " + mean);


var genap = [];
var ganjil = [];


for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        genap.push(arr[i]);
    } else {
        ganjil.push(arr[i]);
    }
}
console.log(genap);
console.log(ganjil);
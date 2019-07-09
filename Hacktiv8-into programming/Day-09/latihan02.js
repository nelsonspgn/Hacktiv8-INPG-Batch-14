// Soal 2

// Buatlah angka genap dari 1-50 dalam sebuah array dengan looping
//looping Angka Genap (1,50)[2,4,6,8...,50]

var loopingAngkaGenap = [];

for (i = 2; i <= 50; i++) {
    if (i % 2 == 0) {
        loopingAngkaGenap.push(i);
    }
}

console.log(loopingAngkaGenap);
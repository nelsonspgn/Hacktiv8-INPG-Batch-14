//Soal 3

//buat array 1-30 menggunakan function kaskus()
//jika angka habis dibagi 3 mengembalikan "KAS"
//jika angka habis dibagi 6 mengembalikan "KUS"
//jika angka habis di bagi 15 mengembalikan "KASKUS"

//contoh hasil return
//[1,2,KAS,4,5,KUS,7,8,KAS,10,11,KUS,13,14,KASKUS,...]

//DRIVER CODE
//kaskus (1,15)
//hasil [1,2,KAS,3,4,KUS,7,8,...]


var arrKaskus = [];

function kaskus(angka1, angka2) {

    for (angka1 = angka1; angka1 <= angka2; angka1++) {


        if (angka1 % 15 == 0) {
            arrKaskus.push('KASKUS');
        } else if (angka1 % 6 == 0) {
            arrKaskus.push('KUS');
        } else if (angka1 % 3 == 0) {
            arrKaskus.push('KAS');
        } else {
            arrKaskus.push(angka1);
        }
    }
}

var tampil = kaskus(1, 90);
console.log(tampil);
console.log(arrKaskus);
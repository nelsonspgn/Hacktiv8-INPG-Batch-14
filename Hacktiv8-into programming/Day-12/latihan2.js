//var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';

// result
// [
//     ['dimitri', 'dimitri@mail.com', 'male'],
//     ['icha', 'icha@mail.com', 'female'],
//     ['windi', 'windi@mail.com', 'female']
//   ]



var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';

var hasil
var tampung = []


var hasil = text.split(",");
console.log(hasil)

var hasil0 = hasil[0].split(':');
var hasil1 = hasil[1].split(':');
var hasil2 = hasil[2].split(':');

var hasilFinal = [];

hasilFinal.push(hasil0)
hasilFinal.push(hasil1)
hasilFinal.push(hasil2)




console.log(hasilFinal)
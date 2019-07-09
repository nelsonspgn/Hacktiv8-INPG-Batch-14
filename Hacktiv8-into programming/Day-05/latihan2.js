

//Nomor 2

var penumpang = prompt('Masukkan Jumlah Penumpang 1-4 orang');
var kecepatanBecak = 20;

if ((penumpang > 2) && ( penumpang < 4)){
    document.write('Kecepatan Becak Sekarang: ' + (kecepatanBecak - 5)+' ' + 'Km/Jam' + ' ' + 'Dengan jumlah Penumpang: ' + penumpang +' ' + 'Orang');
}
    else if (penumpang == 4){
        document.write('Kecepatan Becak Sekarang: ' + (kecepatanBecak - 7)+' ' + 'Km/Jam ' + ' '  + 'Dengan jumlah Penumpang: ' + penumpang +' ' + 'Orang');
    }
        else{
            document.write('Kecepatan Becak Sekarang: ' + (kecepatanBecak-2)+' ' + 'Km/Jam ' + ' '  + 'Dengan jumlah Penumpang: ' + penumpang +' ' + 'Orang');
        }


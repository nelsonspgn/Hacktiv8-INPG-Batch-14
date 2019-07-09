function GetKecepatan(penumpang) {

    if ((penumpang > 2) && (penumpang < 4)) {
        return (kecepatanBecak - 5)
    } else if (penumpang == 4) {
        return (kecepatanBecak - 7);
    } else {
        return (kecepatanBecak - 2);
    }

}


var kecepatanBecak = 20;

var penumpang1 = prompt('Masukkan Jumlah Penumpang 1-4 orang');

var tampil = alert(GetKecepatan(penumpang1));
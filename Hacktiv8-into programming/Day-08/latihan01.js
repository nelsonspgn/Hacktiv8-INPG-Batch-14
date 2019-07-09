/**
 * 
 * @param {Number} nilai 
 */



function GetGrade(nilai) {
    if ((nilai >= 85) && (nilai <= 100)) {
        return ('Grade Anda A');
    } else if ((nilai >= 85) && (nilai <= 75)) {
        return ('Grade Anda B');
    } else if ((nilai >= 75) && (nilai <= 65)) {
        return ('Grade Anda C');
    } else if ((nilai >= 65) && (nilai <= 55)) {
        return ('Grade Anda D');
    } else {
        return ('Grade Anda E')
    }
}

var nilai = prompt('Masukkan Nilai Anda: ');
var tampil = alert(GetGrade(nilai));
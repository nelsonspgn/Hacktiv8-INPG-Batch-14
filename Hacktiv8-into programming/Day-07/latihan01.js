var nama=prompt('Masukkan Nama Anda: ');

if ( nama != '' ){

    var umur=prompt('Masukkan Umur Anda: ');

    if ( umur < 17){
        alert('Anda Hanya Boleh Memesan Juice');
    }
        else{
            alert('Anda Hanya Boleh Memesan Anggur');
        }


var pesanan=prompt('Masukkan Pesanan Anda: ');


if(( pesanan == "juice" && umur < 17 )){
    alert('Anda Harus membayar Rp 50.000');
    var uang=prompt('Masukkan Uang Anda: ');
    var pesanan;
    var kembalian;

    if( uang < 50000 ){
    alert("Uang tidak cukup. Anda harus pulang")
}
            else{
                if( pesanan == "juice"){
                    kembalian = uang - 50000;
                }
                else{
                    kembalian = uang - 300000;
                }
                alert("Anda bisa pesan minum. Sisa uang Anda: " + kembalian )
            }
            

}
    else if ((pesanan == "anggur" && umur > 17 )){
        alert('Anda Harus membayar Rp 300.000');
        var uang=prompt('Masukkan Uang Anda: ');
        kembalian = uang - 300000;
        alert("Anda bisa pesan minum. Sisa uang Anda: " + kembalian )



    }
        else{
            alert('Minuman yang anda pesan tidak tersedia / umur tidak sesuai')
        }
}

else{
    alert('anda tidak boleh masuk!')
}










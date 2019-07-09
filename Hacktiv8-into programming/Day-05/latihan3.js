var nama = "Andre";
var password = 123;
var isLogin = false;

var user1 = prompt("Masukkan nama: ");
var user2 = prompt("Masukkan password: ");


if (( user1 == nama ) && ( user2 == password )){  
    alert("Anda Berhasil Login");
    isLogin = true;
    var user3 = prompt("Masukkan role: ");
        if (( user3 == "admin") || (user3 == "superadmin")){
            alert("You have all access as " + user3)
        }
            else {
                alert("You have restricted access as " + user3)
            }
}
    else{
        alert("Anda Gagal Login");
    }


 
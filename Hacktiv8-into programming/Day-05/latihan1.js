//Nomor 1

var nilai= prompt('Masukkan Nilai Anda: ');

if (( nilai >= 85 ) && ( nilai <=100 )){
    document.write('Grade Anda A' );
    }
    else if (( nilai >= 85 ) && ( nilai <= 75 )){
    document.write('Grade Anda B');
    }
        else if (( nilai >= 75) && ( nilai <= 65)){
        document.write('Grade Anda C');
        }
            else if (( nilai >= 65 ) && ( nilai <=55)){
            document.write('Grade Anda D');
            }
                else {
                    document.write('Grade Anda E')
                }


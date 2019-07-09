var numbers = [10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7]

//Cari nilai yang paling sering muncul
//result =1


var tampung = [];


for (i = 0; i < numbers.length; i++) {


    console.log(i)

    for (j = 0; j <= numbers.length; j++) {
        console.log("ini j" + j)

        if (numbers[i] == numbers[j]) {


            tampung.push(numbers[i])

        }


    }

}

console.log(tampung);
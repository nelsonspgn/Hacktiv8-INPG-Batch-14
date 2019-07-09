//result
// ID: 1 Name: Dimitri Company: Hacktiv8

// ID: 2 Name: Dhani Company: Hacktiv8

// ID: 3 Name: Icha Company: Hacktiv8
// console.log('ID: ' + people[i][j] + ' Nama: ' + people[i][k] + ' Company: ' + people[i][o])

var temp = [];
var people = [
    [1, 'Dimitri', 'Hacktiv81'],
    [2, 'Dhani', 'Hacktiv82'],
    [3, 'Icha', 'Hacktiv83'],
];

var j = 0

for (i = 0; i < people.length; i++) {

    console.log("ini i" + i)

    for (j = 0; j < people.length; j++) {

        var temp1 = console.log("ID: " + people[i][j])
        temp.push(people[i][j])
        j++

        var temp2 = console.log("Nama: " + people[i][j])
        temp.push(people[i][j])
        j++
        var temp3 = console.log("Company: " + people[i][j])
        temp.push(people[i][j])

    }
}

console.log(temp)

for (i = 0; i < people.length; i++) {
    console.log('ID: ' + people[i][0] + ' Nama: ' + people[i][1] + ' Company: ' + people[i][2])
}
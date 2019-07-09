// function sortByCharacter (text) {
//     // Your code here
//   }

//   // TEST CASES
//   console.log(sortByCharacter('hello')); // 'ehllo'
//   console.log(sortByCharacter('truncate')); // 'acenrttu'
//   console.log(sortByCharacter('developer')); // 'deeeloprv'
//   console.log(sortByCharacter('software')); // 'aeforstw'
//   console.log(sortByCharacter('aegis')); // 'aegis'

function sortByCharacter(text) {

    var temp = text.split("");

    var temp1 = temp.sort();

    var temp2 = temp1.join("");

    return temp2;


}

console.log(sortByCharacter('hello'));
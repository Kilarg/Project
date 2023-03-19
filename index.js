//doubleValues
//const numbers = [1, 2, 3, 4, 5];
//const doubleValues = numbers.map(function(num) {
    //return num * 2;
//});

//onlyEvenValues
//const number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

//let newArr = [];
//number.forEach(function(val) {
  //if (val % 2 === 0) {
   // newArr.push(val);
  //}
//});

//show first and last
//const names = ['Elie', 'Tim', 'Matt', 'colt' ];

//let newArr = [];
//names.forEach(function(val) {
 // newArr.push(val[0] + val[val.length -1]);
//});

//vowelCount
//const names = ['Elie', 'Tim', 'Matt', 'colt' ];
//let splitArr = names;
//let obj = {};
//const vowels = "aeiou";

//splitArr.forEach(function(letter) {
  //let lowerCasedLetter = letter.toLowerCase()
  //if (vowels.indexOf(lowerCasedLetter) !== -1) {
    //if (obj[lowerCasedLetter]) {
      //obj[lowerCasedLetter]++;
    //} else {
     // obj[lowerCasedLetter] = 1;
   // }
//  }
 // return obj;
//});

//Mapping doublevalues with map
//const numbers = [1, 2, 3, 4, 5, 6, 7, 8,];
  //const double = numbers.map(function(val) {
    //return val * 2;
  //});

// map times
//const timeIndex = [1, 2, 3, 4, 5, 6, 7, 8];
  //const time = timeIndex.map(function(val, idx) {
    //return val * idx;
  //});

// map extract
//const extractKey = [{name: 'Elie'}, {name: 'Tim'}];
//const hello = extractKey.map(function(val, obj) {
  //return val[obj];
//});

//const names = [ 'Thomas Farley', 'Nathan Farley']
 //extract = names(arr) {
  //return extract.map(function(val) {
    //return val.first + " " + val.last;
  //});
//}

// filter

const number = [ 1, 2, 3, 4, 5];
const hello = filterByValue(arr, key);
  return hello.filter(function(val) {
    return val[key] !== undefined;
  });


function find(arr, searchValue) {
  return arr.filter(function(val) {
    return val === searchValue;
  })[0];
}

function findInObj(arr, key, searchValue) {
  return arr.filter(function(val) {
    return val[key] === searchValue;
  })[0];
}

function removeVowels(str) {
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function(val) {
      return vowels.indexOf(val) === -1;
    })
    .join("");
}

function doubleOddNumbers(arr) {
  return arr
    .filter(function(val) {
      return val % 2 !== 0;
    })
    .map(function(val) {
      return val * 2;
    });
  }

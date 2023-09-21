/*() - Parenthisis
  [] - Brackets
  {} - Brases
  values in arrays called Elements
*/

//basic array
//const arr1 = [0, 1, 2, 3, 4, 5, true, "Gauri"]
//console.log(arr1);
const arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
//console.log(arr2);


//Array Methods
// arr2.push(6)          //add element at last
// arr2.pop()            //delete last element
// arr2.unshift(10)      //add element at 1st place
// arr2.shift()          //remove 1st element
//console.log(arr2.includes(10));
//console.log(arr2.concat(arr1));
//console.log(arr2.indexOf(4));
// const arr3 = arr2.join()    // adds all the elements of array in string format
// console.log(arr3);
// console.log(typeof arr3);    // type- String

//slice ,splice
console.log("A",arr2);
const Arr1 = arr2.slice(1,3)      // Remove element from copy array and manipulate copy of original array
console.log("B",Arr1);
const Arr2 = arr2.splice(1,3)     //Removes elements from an array and manipulate original array 
console.log("C",Arr2);
console.log(arr2);



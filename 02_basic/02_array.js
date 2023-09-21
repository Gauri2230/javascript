const heros =["thor", "ironman","spiderman"]
const dc =["superman","flash","batman"]
// heros.push(dc)                   //add array into another array arrays 
// console.log(heros[3][1]);

//console.log(heros.concat(dc));      //combile two array elements

// const newArr = [...heros,...dc]       //... spread and combine
// console.log(newArr);

// const arr1 = [1, 2, [3, 4, 5, 6], 7, 8, 9,[10, 11, 12, 13], 14, 15, [1, 3, 5, [4, 5, 6, 2]]]
// const arr2 =arr1.flat(Infinity)     //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(arr1);
// console.log(arr2);

console.log(Array.isArray("Gauri"));    //given value is array or not
console.log(Array.from("Gauri"));       //convert string to array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));   //  new array from a set of elements.

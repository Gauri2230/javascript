const name = "Gauri"
const age = 23
console.log(`Hello my name is ${name} and my age is ${age}`)

const gameName = new String("Gauri-Malvankar")
console.log(gameName[9]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(9));
console.log(gameName.indexOf("M"));

const newString = gameName.substring(0, 4)
console.log(newString);

const anString = gameName.slice(-14,6)
console.log(anString);

const str1 = "     Gauri      "
console.log(str1.trim());                    ///To remove white space


const str2 = "Gauri_Malvankar"
console.log(str2.replace("_"," ")); 
console.log(str2.includes("Gauri")); 

const str3 = "Gauri-Malvankar-Devgad-Rose-Gold"
console.log(str3.split("-"));
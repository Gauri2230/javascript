const accountId = 1234
let accountEmail = "gauri@google.com"
var accountPassword ="1234"
accountCity = "Pune"
let accountState;

/*
Prefer notto use var
because of issue in block scope and functional scope
*/
// accountId = 2  constant variable not allowed to change

accountEmail = "ga@google.com"
accountPassword ="12"
accountCity = "Mumbai"
console.log(accountEmail);
console.table([accountEmail, accountId , accountPassword, accountCity, accountState])
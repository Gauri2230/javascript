console.log(Date());
let myDate = new Date()
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toString());
console.log(typeof myDate);         //object

let myCreatedDate = new Date(2000, 0, 30)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2000, 0, 30, 14, 30)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2000-01-30")
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("07-22-1999")
console.log(myCreatedDate3.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate3.getTime()/1000);

let newDate = new Date()
console.log(newDate.toLocaleString("default",{
    weekday:"long"
}));
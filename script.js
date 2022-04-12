//Hello Object
/*
let user = {};
//Add the property name with the value John
user.name = "John";
//Add the property surname with the value Smith
user.surname = "Smith";
//Change the value of the name to Pete.
user.name = "Pete";
//Remove the property name from the object
delete user.name;
console.log(user);
*/

//Check for emptiness
//Write the function isEmpty(obj) which returns true if the object has no properties, false or otherwise
/*
let schedule = {};

function isEmpty(obj) {
  console.log(Object.keys(obj).length === 0);
}
schedule["8:30"] = "get up";
isEmpty(schedule);
*/

//Sum object properties
/*
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
*/
//Code for sum of all salaries
/*
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);
*/

//Multiply numeric property values by 2
//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2
/*
let menu = {
  width: 400,
  height: 600,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === Number) {
      obj[key] *= 2;
    }
  }
  console.log(obj);
}
multiplyNumeric(menu);
*/

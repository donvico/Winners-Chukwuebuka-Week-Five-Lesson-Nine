// Define an arrow function that takes four arguments: date of birth(DOB), year, name, and location. The function should calculate the user’s age. Using template literal, dynamically display the “Hello name(user’s name) from (location), your current age is (age) and returns the age.
// Write something
let DOB = 1999,
    year = 2023,
    name = 'Ojukwu',
    location = 'Anambra'

 const fifaWc = (DOB, year, name,location) => {
    let age = `${year-DOB}`
    profile = `Hello ${name} from ${location}, your current age is ${age}`;
    console.log(profile);
    return age
};
let age = fifaWc(DOB, year, name,location) 
console.log(age);


  
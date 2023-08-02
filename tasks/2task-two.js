// Define a “userBio” object with the following properties: occupation, height, gender, and nationality. Using object destructuring, get “gender” and “occupation” from the .  Use template literals to make a statement that displays the user’s gender and occupation. Call the function three times with three different users

const user = {
    occupation: 'student',
    height: '6ft',
    gender: 'male',
    nationality: 'Nigeria'
}

let {gender, occupation} = user
console.log(` my name is okiemute and i'm  a ${gender}  by gender and currenty a ${occupation}`);
// // Define a “userBio” object with the following properties: occupation, height, gender, and nationality. Using object destructuring, get “gender” and “occupation” from the .  Use template literals to make a statement that displays the user’s gender and occupation. Call the function three times with three different users

const userBio = {
    occupation: 'Politician',
    height: '5ft',
    gender: 'Male',
    nationality: 'Nigeria'
}
const userBio1 = {
    occupation: 'Businessman',
    height: '6ft',
    gender: 'male',
    nationality: 'Nigeria'
}
const userBio2 = {
    occupation: 'Trader',
    height: '6ft',
    gender: 'Female',
    nationality: 'Nigeria'
}
function useBio (user){
    const {gender, occupation} = user
    let sentence = `hes ${gender} by gender but still a ${occupation}`
    console.log(sentence);
}
useBio(userBio)
useBio(userBio1)
useBio(userBio2)



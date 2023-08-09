
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



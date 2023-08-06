// Create an array of objects of length 4. Each object should have the following properties: firstName, lastName, complexion, and occupation. Loop through the array, for each item, and display the user’s info in a separate div created dynamically.
let arrayObjects = [
    { firstName: 'winners',
    lastName: 'chukwuebuka',
    complexion: 'fair',
    occupation: 'civil servant'
    }
]
let arrObj = arrayObjects.forEach((key)=>{
    console.log(key);
})

const newDiv = document.getElementById('task3')
const para = document.createElement('p')
para.tex = arrObj
newDiv.appendChild(para)
newDiv.style.backgroundColor = 'blue'
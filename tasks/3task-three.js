// Create an array of objects of length 4. Each object should have the following properties: firstName, lastName, complexion, and occupation. Loop through the array, for each item, and display the user’s info in a separate div created dynamically.
const arrayObjects = [
    {
        firstName: "winners",
        lastName: "chukwuebuka",
        complexion: "fair",
        occupation: "civil servant",
    },
    {
        firstName: "adamu",
        lastName: "ciroma",
        complexion: "dark",
        occupation: "banker",
    },
];
const newDiv = document.querySelector(".task3");

arrayObjects.forEach((key) => {
    const contentsDiv = document.createElement("div");

    contentsDiv.innerHTML = `
        <p>firstname: ${key.firstName} </p>
        <p>lastname: ${key.lastName} </p>
        <p>complexion: ${key.complexion} </p>
    `;

    contentsDiv.style.border='1px solid black'
    contentsDiv.style.marginBottom='1rem'

    newDiv.append(contentsDiv);
});

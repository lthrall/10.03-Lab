//Gets the form to be used with the listener
const lineupForm = document.getElementById("lineup");

//Assigns a listener that calls myLineUp on submit
lineupForm.addEventListener("submit", myLineUp);

//Prints the contents of the form
function myLineUp() {
    event.preventDefault();
    const data = new FormData(this);
    let stringData = "";
    for (const [name, value] of data.entries()) {
        console.log(`${name} + ${value}`);
        stringData += name +": " + value + " | ";
    };
    const results = document.createElement("p");
    results.textContent = stringData;
    const resultBox = document.getElementById("resultBox");
    resultBox.appendChild(results);
};


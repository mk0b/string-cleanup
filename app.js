const welcome = 'Welcome to my little project! I hope you find this tool useful. You can send me feedback by emailing megan.obrien@hey.com.';
console.log(welcome);
//grabbing form element
const form = document.getElementById('form');
console.log(form);
const clearButton = document.getElementById('resetButton');
console.log(clearButton);

//This simple app is here to do one thing, help you quickly find and replace all within a string. Or as I like to call it string cleaning.
//Thinking about adding a sparking clean animation

//add some error handling/validation
//add some more explination on what the app does
//host it with github pages
//mess with css
//cleanup console logs

//accepting the string, what needs to be relaced, what to replace it with
const stringClean = (inputString, replace, withThis) => {
    //testing
    console.log(inputString, replace, withThis);
    //capturing the new string and replacing all occurances with the .replaceAll method
    const cleanString = inputString.replaceAll(replace, withThis);
    console.log('Result:', cleanString);
    return cleanString;
};

//display the clean string function
const displayCleanString = (cleanString) => {
    //capturing an existing element if there is one.
    const element = document.createElement('h3');
    element.className = 'result';
    element.textContent = `Result: ${cleanString}`;
    form.appendChild(element);
};

//listening for form submit, preventing default, and capturing fields
form.addEventListener('submit', (event) => {
    console.log('Form submitted!');
    event.preventDefault();
    //capturing form content here
    const string = document.getElementById('string').value;
    const replace = document.getElementById('replace').value;
    const withThis = document.getElementById('withThis').value;
    console.log('String:', string, 'Replace:', replace, 'With this:', withThis );
    //calling the stringclean function and inputting the fields from the form
    const cleanString = stringClean(string, replace, withThis);
    console.log('Clean String:', cleanString);
    //displaying the clean string on the page call function
    displayCleanString(cleanString);
});

//clear button event listener and function to clear form
//leaving the results even if form is cleared.
clearButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Form cleared.');
    form.reset();
});
const welcome = 'Welcome to my little project!';
console.log(welcome);

//This simple app is here to do one thing, help you quickly find and replace all within a string. Or as I like to call it string cleaning.

//accepting the string, what needs to be relaced, what to replace it with
const stringClean = (inputString, replace, withThis) => {
    //testing
    console.log(inputString, replace, withThis);
    //capturing the new string and replacing all occurances with the .replaceAll method
    const cleanString = inputString.replaceAll(replace, withThis);
    console.log('Result: ', cleanString);
};

//call the function
stringClean('test 1 2 3', ' ', ',');
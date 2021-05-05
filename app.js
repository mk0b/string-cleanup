const welcome = 'Welcome to my little project! I hope you find this tool useful. You can send me feedback by emailing megan.obrien@hey.com.';
console.log(welcome);

//This simple app is here to do one thing, help you quickly find and replace all within a string. Or as I like to call it string cleaning.
//Thinking about adding a sparking clean animation
//connect the form to the JS
//print the result on the page
//add some more explination on what the app does
//host it with github pages
//mess with css

//accepting the string, what needs to be relaced, what to replace it with
const stringClean = (inputString, replace, withThis) => {
    //testing
    console.log(inputString, replace, withThis);
    //capturing the new string and replacing all occurances with the .replaceAll method
    const cleanString = inputString.replaceAll(replace, withThis);
    console.log('Result:', cleanString);
};

//call the function
stringClean('1234566 09430985 3284739847', ' ', ',');
// var kimObject = {
//     firstName: "Kim",
//     lastName: "Preece",
//     favoriteMovies: ["A Fish Called Wanda", "Jungle Book", "The Breakfast Club", "The Hobbit: An Unexpected Journey", "Pulp Fiction"],
//     fullOfHolidayCheer: true,
//     homeTown: "Awesomeville, USA",
//     buildBioHTML: function(){
//       // YOUR CODE GOES HERE
//     }
// }

// This method should build an HTML string that represents the data you collected. Your HTML string should have:
// An h1 element with your partner's full name
// A bulleted list (ul) with a li element for each of their favorite movies. (Use a for loop to build this part of the HTML string!)
// A sentence about whether or not they're full of holiday cheer. (Example: "Definitely full of holiday cheer" or "Not at all full of holiday cheer". Please don't print just "true" or "false".)
// A p element with their hometown.
// This method should return the HTML string.
// Call (invoke) the buildBio method and store the returned HTML string in a variable.
// Print your HTML string to the DOM
// In your JavaScript file, below the object you built, copy and paste the following function:
// function printToDOM(htmlString, idOfElement){
//     var element = document.querySelector(`#${idOfElement}`);
//     element.innerHTML = htmlString;
// }
// Call (invoke) the printToDOM function. You should pass in the HTML string you built with your buildBio method the id of the element you want to print to.
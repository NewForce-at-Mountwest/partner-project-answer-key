var kimObject = {
    firstName: "Kim",
    lastName: "Preece",
    favoriteMovies: ["A Fish Called Wanda", "Jungle Book", "The Breakfast Club", "The Hobbit: An Unexpected Journey", "Pulp Fiction"],
    fullOfHolidayCheer: true,
    homeTown: "Awesomeville, USA",
    buildBioHTML: function () {
        // This method should build an HTML string that represents the data you collected. Your HTML string should have:
        // An h1 element with your partner's full name
        var fullName = `<h1>${this.firstName} ${this.lastName}</h1>`;

        // A bulleted list (ul) with a li element for each of their favorite movies. (Use a for loop to build this part of the HTML string!)
        var favoriteMoviesString = "";

        for (var i = 0; i < this.favoriteMovies.length; i++) {
            favoriteMoviesString = favoriteMoviesString + `<li>${this.favoriteMovies[i]}</li>`;
        }


        console.log(favoriteMoviesString);


        // A sentence about whether or not they're full of holiday cheer. (Example: "Definitely full of holiday cheer" or "Not at all full of holiday cheer". Please don't print just "true" or "false".)
        var holidayCheerSentence = "";

        if (this.fullOfHolidayCheer === true) {
            holidayCheerSentence = "<p>Definitely so full of holiday cheer.</p>";
        } else {
            holidayCheerSentence = "<p>Totally a grinch.</p>";
        }

        // A p element with their hometown.
        var homeTown = `<p>From ${this.homeTown}</p>`;

        // This method should return the HTML string.
        console.log(`${fullName} ${favoriteMoviesString} ${holidayCheerSentence} ${homeTown}`);
        return `${fullName} <ul>${favoriteMoviesString}</ul> ${holidayCheerSentence} ${homeTown}`;
    }
}



function printToDOM(htmlString, idOfElement) {
    var element = document.querySelector(`#${idOfElement}`);
    element.innerHTML = htmlString;
}

var kimHTMLString = kimObject.buildBioHTML();

printToDOM(kimHTMLString, "personal-website");

// Call (invoke) the buildBio method and store the returned HTML string in a variable.
// Print your HTML string to the DOM
// In your JavaScript file, below the object you built, copy and paste the following function:

// Call (invoke) the printToDOM function. You should pass in the HTML string you built with your buildBio method the id of the element you want to print to.

var studentArray = ["Ryan", "Bobby", "Nick", "Megan", "Alex"];

var studentHTMLString = "";

for(var i = 0; i < studentArray.length; i++){
    console.log("inside the loop but before the addition", studentHTMLString)
    studentHTMLString = studentHTMLString + `<li>${studentArray[i]}</li>`;
    console.log("inside the loop, after the addition", studentHTMLString);
}

var elementToPrintTo = document.querySelector("#student-list");
elementToPrintTo.innerHTML = studentHTMLString;

// blah blah blah extra comments



const fs = require("fs");
const inquirer = require("inquirer");

inquirer
	.prompt([
		{
			type: "input",
			message: "What is your name?",
			name: "name",
		},
		{
			type: "input",
			message: "Where are you from?",
			name: "location",
		},
		{
			type: "input",
			message: "Anything you would like to share about yourself?",
			name: "bio",
		},
		{
			type: "input",
			message: "What is your LinkedIn URL?",
			name: "linkedin",
		},
		{
			type: "input",
			message: "What is your GitHub URL?",
			name: "github",
		},
	])
	.then((answer) => {
		fs.appendFile(
			`${answer.name}-portfolio.html`,
			createHTML(answer.name, answer.location, answer.bio, answer.linkedin, answer.github),
			(err) => (err ? console.error(err) : console.log("Portfolio created."))
		);
	});

function createHTML(name, loc, bio, li, gh) {
	return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${name}</h1>
        <h2>About</h2>
        <p>${name} currently resides in ${loc}.</p>
        <p>${bio}</p>
        <h2>Contact</h2>
        <a href="${li}">Linked In</a>
        <a href="${gh}">Git Hub</a>
    </body>
    </html>`;
}

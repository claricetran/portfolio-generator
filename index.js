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
		const { name, location, bio, linkedin, github } = answer;
		const portName = name.toLowerCase().replace(/\s/g, "");
		fs.writeFile(
			`${portName}-portfolio.html`,
			createHTML(name, location, bio, linkedin, github),
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
        <title>${name}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/css/foundation.min.css" crossorigin="anonymous">
        <style>
            * {
                margin: 0 auto;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <nav>
            <h1 class="align-self-center">${name}</h1>
            <ul class="menu align-center">
                <li><a href="#about">About</a></li>
                <li><a href="${li}" target="_blank">Linked In</a></li>
                <li><a href="${gh}" target="_blank">Git Hub</a></li>
            </ul>
        </nav>
        <main class="align-self-center align-center">
            <h2 id="about">About</h2>
            <p>${name.split(" ")[0]} currently resides in ${loc}.</p>
            <p>${bio}</p>
        </main>

        <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/js/foundation.min.js" crossorigin="anonymous"></scrip>
    </body>
    </html>`;
}

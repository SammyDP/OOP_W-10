const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const questions = {
  Manager: [
    {
      type: "input",
      message: "What is the manager's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the manager's ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the manager's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the manager's office number?",
      name: "office",
    },
  ],
  Engineer: [
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the engineer's ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the engineer's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the engineer's Github userName?",
      name: "git",
    },
  ],
  Intern: [
    {
      type: "input",
      message: "What is the intern's name",
      name: "name",
    },
    {
      type: "input",
      message: "What is the intern's id number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the intern's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What school is the intern enrolled?",
      name: "school",
    },
  ],
};

const addAnother = {
  type: "list",
  message: "Would you like to add another employee, if so which type?",
  name: "job",
  choices: ["Engineer", "Intern", "I have no other employees to add"],
};

const startApp = () => {
  inquirer.prompt(questions.Manager).then((answers) => {
    const teamMember = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.office
    );
    const fillManager = inputManager(teamMember);
    const beginHTML = fs.writeFile(
      "./dist/Created.html",
      fillManager,
      function (err) {
        if (err) {
          console.log("Manager does not work");
        }
      }
    );
    makeChoice();
  });
};

const makeChoice = () => {
  inquirer.prompt(addAnother).then((answers) => {
    if (answers.job === "Intern") {
      internData();
    } else if (answers.job === "Engineer") {
      engineerData();
    } else {
      const fillInfo = finishHTML();
      fs.appendFile("./dist/Created.html", fillInfo, function (err) {
        if (err) {
          console.log("intern does not work");
        }
      });
    }
  });
};
const internData = () => {
  inquirer.prompt(questions.Intern).then((answers) => {
    const teamMember = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    const fillIntern = inputIntern(teamMember);
    const insertHTML = fs.appendFile(
      "./dist/Created.html",
      fillIntern,
      function (err) {
        if (err) {
          console.log("Manager does not work");
        }
        makeChoice();
      }
    );
  });
};

const engineerData = () => {
  inquirer.prompt(questions.Engineer).then((answers) => {
    const teamMember = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.git
    );
    const fillEngineer = inputEngineer(teamMember);
    const insertHTML = fs.appendFile(
      "./dist/Created.html",
      fillEngineer,
      function (err) {
        if (err) {
          console.log("Engineer does not work");
        }
        makeChoice();
      }
    );
  });
};
const inputManager = (data) => {
  return `
            <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Team Generator</title>
              <link rel="title icon" href="https://cdn-icons-png.flaticon.com/512/236/236842.png" />
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
              <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
              <style>
              *{
                  font-family: Georgia, serif;
                }
                header{
                    background: #e66465;
                    color: white;
                    text-align: center;
                    
                    padding: 4%;
                }
                .box-line{
                    border: 2px solid black;
                    margin: 10px;
                    box-shadow: 10px 10px 5px grey;
                    border-radius: 10px;
                }
                .card{
                    background-color: #7FFFD4;
                }
                </style>
          </head>
          <Header>
              <h1>My Team</h1>
          </Header>
          <body>
              <div class="container text-center">
                  <div class="row">
                    <div class="col-4 col-sm-12 col-lg-4 col-md-6">
                      <div class="card box-line" style="width: 18rem;">
                          <div class="card-body">
                          <h5 class="card-title">${data.name}</h5>
                          <h6 class="card-subtitle mb-2 text-muted"><i class="fa-solid fa-person"></i>  Manager</h6>
                          <p class="card-text">Employee ID: ${data.id}</p>
                          <span>Email:</span><a href="mailto:${data.email}" class="card-link"> ${data.email}</a>
                          <p class="card-link">Office Number ${data.office}</p>
                          </div>
                      </div>
                    </div>`;
};
const inputEngineer = (data) => {
  return `
                  <div class="col-4 col-sm-12 col-lg-4 col-md-6">
                    <div class="card box-line" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${data.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted"><i class="fa-solid fa-gear"></i> Engineer</h6>
                        <p class="card-text">Employee ID: ${data.id}</p>
                        <span>Email:</span><a href="mailto:${data.email}" class="card-link"> ${data.email}</a><br>
                        <span>GitHub:</span><a href="https://github.com/${data.git}" class="card-link"> ${data.git}</a>
                        </div>
                    </div>
                  </div>`;
};
const inputIntern = (data) => {
  return `
                  <div class="col-4 col-sm-12 col-lg-4 col-md-6">
                    <div class="card box-line" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${data.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted"><i class="fa-solid fa-graduation-cap"></i> Intern</h6>
                        <p class="card-text">Employee ID: ${data.id}</p>
                        <span>Email:</span><a href="mailto:${data.email}" class="card-link"> ${data.email}</a>
                        <p class="card-link">School: ${data.school}</p>
                        </div>
                    </div>
                  </div>`;
};
const finishHTML = () => {
  return `    
            </div>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
              <script src="https://kit.fontawesome.com/ce42e41f83.js" crossorigin="anonymous"></script>
            </body>
          </html>`;
};

startApp();

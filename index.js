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

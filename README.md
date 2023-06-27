# mvc-tech-blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This week, I was tasked in developing a full-stack application that allow users to generate and interact with material related to the technology sector. The program allows users to save generated material via the dashboard page, comment on other users' postings, and modifies and deletes their own. When visiting the site, users will be able to read all current posts without requiring an account; however, when attempting to access the dashboard or creating or viewing particular articles, users will be required to login or establish an account. The program uses session storage and cookies for user authentication and provides a secure profile through customized routing and page protection. Before entering a user's password, it is hashed using the bcrypt dependency.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)

## Installation

* First you will need to clone this repository to your computer. [Link](https://github.com/slmov215/mvc-tech-blog)
* Next, open VS code. 
  - [Click Here](https://code.visualstudio.com/) If you do not have it installed. 

    ![VS Code](https://img.shields.io/badge/visualstudiocode-badge-blue.svg?logo=visual-studio-code)
* Proceed by opening your terminal and run the command "npm i' to install the required dependencies listed in the package.json file. 
  - Also, you will need to add a .env file within the root directory of the repository.
    - Inside this file, please include your environmental variables, specifying the database name, your MySQL username, and your MySQL password. 
      - This is require to be completed before running the application, and will allow the connection.js file to use your environmental variables while keeping your sensitive information protected.
* After you've downloaded the packages, run the command "mysql -u root -p < db/schema.sql" in the terminal and enter your personal MySQL password, where it will create the database.
* In the terminal, you will then need to seed the database by running the command "npm run seed".

## Usage

This application is quite simple to use. Users will interact with the site entirely through the frontend interface. They will see a public-facing feed and a login button, after which they will be asked to login or create an account. From there, users may navigate the full platform and begin contributing and generating content right away.


Click here for the [deloyed link (Heroku)](https://my-mvc-tech-blog-slmov-2a0483569b53.herokuapp.com/)

![ScreenShot]()

![ScreenShot]()

![ScreenShot]()

![ScreenShot]()

![ScreenShot]()

## License
[MIT License](https://opensource.org/licenses/MIT)

## Questions

[Review my other projects on GitHub.](https://www.github.com/slmov215)

[Email me](mailto:slmov215@gmail.com)

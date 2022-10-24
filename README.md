# Tech Blog

## About the Project

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

I'm building a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. I'm building this site completely from scratch.  It is deployed to Heroku:  https://tech-blog-site-2022.herokuapp.com/

The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```



## About the Tech

The application’s folder structure follows the Model-View-Controller paradigm. I'm using the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for the Views, the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for the Models, and created an Express.js API for the Controllers.

I'm also utilizing the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and I did not have to do anything to the application other than implement the npm package.

![image](https://user-images.githubusercontent.com/102529279/197471139-09972dee-0407-4f2f-9469-ee903c7080ff.png)
![image](https://user-images.githubusercontent.com/102529279/197471432-a8dce4a7-9fee-4d6f-b204-f0d2b66aa253.png)

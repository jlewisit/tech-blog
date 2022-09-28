const sequelize = require('../config/connection');
const { User, Comment, Post } = require('../models');

const userSeed = require('./user-seeds');
const postSeed = require('./post-seeds');
const commentSeed = require('./comment-seeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('**DATABASE SYNCED**/n');

  await userSeed();
  console.log('**USER TABLE SEEDED**/n');

  await postSeed();
  console.log('**POST TABLE SEEDED**/n');

  await commentSeed();
  console.log('**COMMENT TABLE SEEDED**/n');


  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }


  process.exit(0);
};

seedDatabase();

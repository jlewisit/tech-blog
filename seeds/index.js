const sequelize = require('../config/connection');
// const { User, Comment, Post } = require('../models');

const { User } = require('../models');
const userSeed = require('./user-seeds.json');
const { Post } = require('../models');
const postSeed = require('./post-seeds.json');
const { Comment } = require('../models')
const commentSeed = require('./comment-seeds.json');

const seedDatabase = async () => {

  await sequelize.sync({ force: true });
  console.log('**DATABASE SYNCED**/n');

  await User.bulkCreate(userSeed);
  console.log('**USER TABLE SEEDED**/n');

  await Post.bulkCreate(postSeed);
  console.log('**POST TABLE SEEDED**/n');

  await Comment.bulkCreate(commentSeed);
  console.log('**COMMENT TABLE SEEDED**/n');

  process.exit(0);
};

seedDatabase();

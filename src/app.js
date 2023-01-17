const express = require('express');
const loginRouter = require('./routes/login.routes');
const userRouter = require('./routes/user.routes');
const categoriesRouter = require('./routes/categories.routes');
const postRouter = require('./routes/post.routes');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

module.exports = app;

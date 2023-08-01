// Load environment variables
import "./loadEnvironment.mjs";

import express from 'express';
import router from '.routes/posts.mjs';

const app = express();
const port = process.env.PORT || 3000;


//app.use('/posts', router);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  
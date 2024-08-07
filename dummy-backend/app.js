const express = require("express");
const bodyParser = require("body-parser");

const { getStoredPosts, storePosts } = require("./data/posts");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/posts", async (req, res) => {
  const storedPosts = await getStoredPosts();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 500));
  res.json({ posts: storedPosts });
});

app.get("/posts/:id", async (req, res) => {
  const storedPosts = await getStoredPosts();
  const post = storedPosts.find((post) => post.id === req.params.id);
  res.json({ post });
});

app.post("/posts/:id", async (req, res) => {
  let allPosts = await getStoredPosts();
  let selectedPostIdx = NaN;
  const post = allPosts.find((post, idx) => {
    if (post.id === req.params.id) {
      selectedPostIdx = idx;
      return true;
    }
    return false;
  });
  allPosts[selectedPostIdx].rating = req.body.rating;
  await storePosts(allPosts);
  res.status(200).json('{"status": "ok"}');
});

app.post("/new-post", async (req, res) => {
  const existingPosts = await getStoredPosts();
  console.log("Posted:", JSON.stringify(req.body));
  const postData = req.body;
  const newPost = {
    ...postData,
    id: Math.random().toString(),
  };
  const updatedPosts = [newPost, ...existingPosts];
  await storePosts(updatedPosts);
  res.status(201).json({ message: "Stored new post.", post: newPost });
});

app.listen(8080, () => {
  console.log("dummy backend server started on port 8080");
});

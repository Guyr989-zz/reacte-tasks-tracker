const express = require("express");
const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,DELETE");
  next();
});

const tasks = [
  { id: 1, text: "Docktor appointment", done: true },
  { id: 2, text: "get appels", done: false },
];
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.delete("/api/tasks/:id", (req, res) => {
  res.json({
    message: `post ${req.params.id} deleted `,
  });
});

module.exports = app;

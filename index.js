const express = require("express");

const server = express();

server.use(express.json());

const projects = [];
let reqCount = 0;

server.use((req, res, next) => {
  reqCount++;

  console.log(`Requisitions count: ${reqCount}`);

  next();
});

function checkIdExists(req, res, next) {
  req.projectIndex = req.projectIndex = projects.findIndex(
    el => el.id == req.params.id
  );

  if (!projects[req.projectIndex]) {
    return res.status(400).json({ error: "ID does not exist" });
  }

  return next();
}

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(project);
});

server.post("/projects/:id/tasks", checkIdExists, (req, res) => {
  projects[req.projectIndex].tasks.push(req.body.title);

  return res.json(projects);
});

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.put("/projects/:id", checkIdExists, (req, res) => {
  let project = projects.find(el => el.id == req.params.id);

  project.title = req.body.title;

  return res.json(project);
});

server.delete("/projects/:id", checkIdExists, (req, res) => {
  projects.splice(req.projectIndex, 1);

  return res.send();
});

server.listen(3001);

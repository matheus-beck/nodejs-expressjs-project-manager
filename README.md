# project-manager
Project manager backend developed using Node.js and Express.js. Built as the first challenge of the GoStack Bootcamp from RocketSeat. This CRUD handles a local array of projects that simulates our database.

## Getting started

1. Clone the project into your machine and run:
```console
yarn install
```

2. To run the server: 

```console
yarn dev
```

## Routes

- `POST /projects`: The route should receive` id` and `title` within the body of registering a new project within an array in the following format:` {id: "1", title: 'New project', tasks: []} `; Be sure to submit both the project ID and project title in double-quoted string format.

- `GET /projects`: Route that lists all projects and their tasks;

- `PUT /projects/:id`: The route will only change the project title with the` id` present in the route parameters;

- `DELETE /projects/:id`: The route will delete the project with the` id` present in the route parameters;

- `POST /projects/:id/tasks`: The route will receive a` title` field and store a new task in the task array of a specific project chosen through the `id` present in the route parameters;

---

Made with ❤️ and ☕ by Matheus Beck :wave: [Get in touch!](https://www.linkedin.com/in/matheus-beck/)

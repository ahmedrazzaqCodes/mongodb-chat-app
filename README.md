# 💬 MongoDB Chat App

A simple CRUD-based chat application built using **Node.js, Express.js, MongoDB, Mongoose, and EJS**. This project allows users to create chats, view messages, edit existing messages, and delete chats.

This project is part of my journey to learn backend development and build practical full-stack web development projects.

## 🚀 Features

- **Create Chats:** Add new messages with sender, receiver, and message content.
- **View Chats:** Display stored chat messages from MongoDB.
- **Date & Time:** Store the date and time when a chat is created.
- **Edit Messages:** Update the message content of an existing chat through an edit form.
- **Delete Chats:** Remove a chat using the delete functionality.
- **Dynamic Rendering:** Display chat data using EJS templates.
- **Database Integration:** Store and manage chat documents using MongoDB and Mongoose.
- **RESTful Routes:** Use Express.js routes to handle chat operations.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime for the backend |
| Express.js | Server and routing |
| MongoDB | NoSQL database |
| Mongoose | Schema definition and database operations |
| EJS | Dynamic HTML templating |
| HTML & CSS | Page structure and styling |

## 📂 Project Structure


mongodb-chat-app/
├── models/
│   └── chat.js
├── views/
│   ├── index.ejs
│   └── edit.ejs
├── public/
│   └── style.css
├── index.js
├── init.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md



## 🔄 CRUD Operations

This project demonstrates the four fundamental CRUD operations:

| Operation | Description |
|---|---|
| Create | Add a new chat message |
| Read | Retrieve and display chats |
| Update | Edit an existing chat message |
| Delete | Delete a chat from the database |

## 📚 What I Learned

While building this project, I practiced:

- Connecting a Node.js application to MongoDB.
- Creating Mongoose schemas and models.
- Handling GET and POST requests in Express.js.
- Processing form data using `req.body`.
- Creating, retrieving, updating, and deleting database documents.
- Using Mongoose methods such as `find()`, `save()`, and document update/delete methods.
- Working with dynamic EJS templates and form submissions.
- Handling date and time fields in database documents.
- Debugging database connection, schema, and routing issues.
- Using Git and GitHub to track project progress.

## 🎯 Future Improvements

- Add user authentication and authorization.
- Improve the UI with responsive styling.
- Add form validation and better error messages.
- Add search and filtering for chats.
- Deploy the application online.

## 👨‍💻 About This Project

I built this project as part of my continuous learning journey in backend and full-stack web development. My goal is to strengthen my fundamentals by building projects, debugging real issues, and understanding how each part of an application works.

**Status:** Learning project — actively improving 🚀

**Built with ❤️ using Node.js, Express.js, MongoDB, Mongoose, and EJS.**
Built By Ahmed Razzaq❤️ 
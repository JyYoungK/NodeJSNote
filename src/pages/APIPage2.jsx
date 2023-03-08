import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";

function APIPage2() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Basic CRUD FUNCTIONS </h1>
      <h2 className="text-2xl mt-5"> Using Local</h2>
      <SyntaxHighlighter
        language="javascript"
        style={nord}
      >{`import express from "express"; // part of the ES6 module system
//const express = require('express'); // commonJS module system, which is older
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
        
const app = express();
const PORT = 5000;
      
//--bodyParser and Cors are both middleware 
//body-parser is a middleware that is commonly used in Node.js web applications to parse incoming request bodies in a middleware before handling the request. It allows you to extract data from the request body and make it available in your server-side code.
//Installing Nodemon in your Node.js project allows you to automatically restart the server whenever changes are made to your code, eliminating the need to manually restart the server each time you make updates.
      
      
app.use(bodyParser.json());
app.use("/users", usersRoutes);
//all routes in here are starting with /users
      
      
app.listen(PORT, () =>
    console.log('Server running on port: http://localhost:$(PORT)')
);
      
      
app.get("/", (req, res) => {//First route
    res.send("Hello from index.js");
});
      `}</SyntaxHighlighter>
      <h2 className="text-2xl mt-5"> Router 1</h2>
      <SyntaxHighlighter
        language="javascript"
        style={nord}
      >{`import express from "express";
import {
    getUsers,
    createUser,
    getUser,
    deleteUser,
    updateUser,
} from "../controllers/users.js";
      
      
const router = express.Router();
      
router.get("/", getUsers);
      
//Browser can only do get request, so you need a software like postman to do it
router.post("/", createUser);
      
router.get("/:id", getUser);
      
router.delete("/:id", deleteUser);
      
router.patch("/:id", updateUser);
      
export default router;`}</SyntaxHighlighter>
      <h2 className="text-2xl mt-5"> Controllers 1</h2>
      <SyntaxHighlighter
        language="javascript"
        style={nord}
      >{`import { v4 as uuid } from "uuid";

let users = [];
      
export const getUsers = (req, res) => {
    res.send(users);
};
      
export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuid() }); 
      // Creating own personal ID from here
      
};
      
// to make this only accept id is to
// => req.params { id:2 }
export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};
      
export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== req.params.id);
};
      
      
export const updateUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);
    user.username = req.body.username;
    user.age = req.body.age;
}`}</SyntaxHighlighter>

      <h2 className="text-2xl mt-5"> Using DB</h2>
      <SyntaxHighlighter
        language="javascript"
        style={nord}
      >{`import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
//CORS is a mechanism that allows web applications running on one domain to access resources from another domain.
import mongoose from "mongoose";
import router from "./router";
      
const app = express();
const PORT = 8080;
      
app.use(cors({credentials: true,}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/", router());
      
const server = http.createServer(app);
      
      
server.listen(PORT, () => {
    console.log('Server running on http://localhost:$(PORT)');
});
      
const MONGO_URL = 'mongodb+srv://johnny:DBPW@nodejs.xkeajjs.mongodb.net/?retryWrites=true&w=majority';
      
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));
      
app.get("/", (req, res) => {//First route
    res.send("Hello from index.js");
});
`}</SyntaxHighlighter>

      <h2 className="text-2xl mt-5"> Router 2</h2>
      <SyntaxHighlighter
        language="javascript"
        style={nord}
      >{`import express from "express";
import { getAllUsers, deleteUser, updateUser } from "../controllers/users";
import { isAuthenticated, isOwner } from "../middlewares";
      
      
export default (router: express.Router) => {
    router.get("/users", isAuthenticated, getAllUsers);
    router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
    router.patch("/users/:id", isAuthenticated, isOwner, updateUser);
};`}</SyntaxHighlighter>
      <h2 className="text-2xl mt-5"> Controllers 2</h2>
      <SyntaxHighlighter language="javascript" style={nord}>{`// User Actions
export const UserModel = mongoose.model("User", UserSchema);
export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) =>
    UserModel.findOne({ "authentication.sessionToken": sessionToken });
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values: Record<string, any>) =>
    new UserModel(values).save().then((user) => user.toObject());
export const deleteUserById = (id: string) =>
    UserModel.findOneAndDelete({ _id: id });
export const updateUserById = (id: string, values: Record<string, any>) =>
    UserModel.findByIdAndUpdate(id, values);`}</SyntaxHighlighter>
    </div>
  );
}

export default APIPage2;

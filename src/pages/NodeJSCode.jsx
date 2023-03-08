import React, { useState, useEffect, useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";

function nodeJSCode() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">NodeJS Code</h1>
      <div>
        We will build a web application where our server will live on a url and
        when a user makes a request to this url in the browser, the server will
        respond with some html.
      </div>
      <div>
        In our code, we'll first create an instance of express app. An express
        app allows us to create different urls and endpoints that a user can
        navigate to in the browser. And then when we define code for the server
        to handle those requests.
      </div>
      <SyntaxHighlighter language="javascript" style={nord}>
        {`const express = require('express'); //creating a basic server 
const app = express(); //initializing it        `}
      </SyntaxHighlighter>
      <div>
        When a user navigates to a url in the browser, it's what's known as a
        get request. Which mean's they're requesting some data on the server and
        not trying to modify or update anything on the server.
      </div>
      <div>
        With express, we can set up an endpoint like that by calling app.get()
        and then the first argument is the url that the user will navigate to.
      </div>
      <SyntaxHighlighter language="javascript" style={nord}>
        {`app.get('/foo/bar')`}
      </SyntaxHighlighter>
      <div>
        {" "}
        You can create multiple pages for your web app by creating different
        urls
      </div>
      <div>
        The second argument here is our callback function. You can think of
        every request to this url as an event and you handle that event with
        this function. Express gives us two parameters to make use of the
        request and response.
      </div>
      <div>Request is the incoming data from the user.</div>
      <div>
        {" "}
        To read some html from our file system and then send it back down to the
        browser
      </div>
      <h2 className="text-2xl mt-5"> Read from HTML File</h2>
      <SyntaxHighlighter language="javascript" style={nord}>
        {`app.get('/', (request, response) => {
      readFile('./home.html', 'utf8', (err, html) => {
        if (err) {
          response.status(500).send("Sorry out of order")
        }
        response.send(html)
      })
})`}
      </SyntaxHighlighter>
      <div>
        We'll read the file, use utf-8 encoding, then in our callback function,
        we will have access to the html string and we can send a response back
        down to the client by calling response.send
      </div>
      <div>
        {" "}
        And also, if there's an error in the callback, we can handle that by
        sending a response with a status code of 500, which means a server
        error, so the user knows that something went wrong on the server.
      </div>
      <div>We now have a way to send html from the server to the client</div>
      <div>
        {" "}
        Now we need express to start listening to incoming requests. We do that
        by defining a port, which will normally come from a node environment
        variable. Then we call app.listen with that port, and when it starts up,
        we'll console.log that the app is available on localhost 3000.
      </div>
      <SyntaxHighlighter language="javascript" style={nord}>
        {`app.listen(process.env.PORT || 3000, () => console.log("App available on port 3000"))`}
      </SyntaxHighlighter>
      <div>
        Now if you go ahead and open it in the browser, you should see your html
        returned back to you.
      </div>
      <h2 className="text-2xl mt-5"> Important</h2>
      <div>
        Callbacks can be very difficult to work with as your app grows in
        complexity. It often leads to a state known as callback hell, where you
        have a bunch of callbacks nested within callbacks within more callbacks
        and so on. A great way to avoid code like this is to use promises
        instead of callbacks.
      </div>
      <SyntaxHighlighter language="javascript" style={nord}>
        {`const {readFile} = require('fs').promises;`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={nord}>
        {`app.get('/', async (request, response) => {
      response.send(await readFile('./home.html', 'utf8'))
})`}
      </SyntaxHighlighter>
      <div>
        {" "}
        You make callback function async and then we can write the response in a
        single line of code by saying response send and then await the operation
        to read file. This way, it's much more concise and readable but it's
        especially useful when you have multiple async operations to handle in a
        single request.
      </div>
      <h2 className="text-2xl mt-5"> Deploy?</h2>
      <div>
        {" "}
        There are many ways to do it but standard and best way is to use Google
        engine app, what has known as a standard environment for Node.JS up to
        version 12. And what that does is provide you with a server in the cloud
        that scales automatically based on incoming traffic to your app.
      </div>
    </div>
  );
}

export default nodeJSCode;

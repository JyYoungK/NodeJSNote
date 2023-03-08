import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";

function basicNodeJS() {
  // const { readFile, readFileSync } = require("fs");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">NodeJS</h1>
      <h2 className="text-2xl my-5">Node.js concepts:</h2>
      <ul class="list-disc list-inside">
        <li class="mb-4">
          <span class="font-bold">Asynchronous programming:</span> Node.js is
          built around the concept of asynchronous programming, which allows
          developers to write non-blocking, event-driven code that can handle
          multiple requests simultaneously without blocking the execution of
          other code.
        </li>
        <li class="mb-4">
          <span class="font-bold">A Promise:</span> An object that represents
          the eventual completion (or failure) of an asynchronous operation and
          allows developers to write asynchronous code in a more synchronous
          style. Promises are widely used in Node.js and in modern JavaScript
          applications to handle asynchronous operations such as network
          requests, file I/O, and database queries.
        </li>
        <li class="mb-4">
          <span class="font-bold">Modules:</span> Node.js uses a module-based
          architecture, where each module is a separate file that encapsulates a
          piece of functionality. Modules can be easily imported and exported,
          making it easy to reuse code across different parts of an application.
        </li>
        <ul class="list-disc pl-16">
          <li class="mb-4">
            <span class="font-bold">http:</span> Provides a built-in HTTP server
            and client for handling HTTP requests and responses.
          </li>
          <li class="mb-4">
            <span class="font-bold">fs:</span> Provides file system access for
            reading, writing, and manipulating files.
          </li>
          <li class="mb-4">
            <span class="font-bold">path:</span> Provides utilities for working
            with file and directory paths.
          </li>
          <li class="mb-4">
            <span class="font-bold">crypto:</span> Provides cryptographic
            functionality for hashing, encryption, and decryption.
          </li>
          <li class="mb-4">
            <span class="font-bold">events:</span> Provides a simple
            event-driven programming interface for building event-driven
            applications.
          </li>
          <li class="mb-4">
            <span class="font-bold">express:</span> A popular web framework that
            provides a simple and flexible API for building web applications and
            APIs.
          </li>
          <li class="mb-4">
            <span class="font-bold">socket.io:</span> Provides real-time,
            bi-directional communication between web clients and servers using
            WebSockets.
          </li>
          <li class="mb-4">
            <span class="font-bold">mongoose:</span> Provides an Object Data
            Modeling (ODM) layer for MongoDB, making it easy to work with
            MongoDB databases in Node.js.
          </li>
          <li class="mb-4">
            <span class="font-bold">request:</span> Provides a simplified HTTP
            client for making HTTP requests to external APIs and services.
          </li>
          <li class="mb-4">
            <span class="font-bold">lodash:</span> Provides a set of utility
            functions for manipulating and working with data in JavaScript.
          </li>
          <li class="mb-4">
            <span class="font-bold">moment:</span> Provides a library for
            parsing, validating, manipulating, and formatting dates and times in
            JavaScript.
          </li>
          <li class="mb-4">
            <span class="font-bold">Cors:</span> Provides middleware for
            handling a security feature implemented in web browsers that
            restricts web pages from making requests to a different domain than
            the one the page came from.
          </li>
        </ul>
        <li class="mb-4">
          <span class="font-bold">NPM: </span> Node.js comes with a package
          manager called NPM (Node Package Manager), which is used to install,
          manage, and share packages of reusable code.
        </li>
        <li class="mb-4">
          <span class="font-bold">Event-driven architecture: </span> Node.js
          uses an event-driven architecture that allows developers to handle I/O
          operations and other events using event listeners and callbacks.
        </li>
        <li class="mb-4">
          <span class="font-bold">Performance: </span> Node.js is known for its
          high performance and scalability, making it ideal for building
          large-scale applications with high traffic.
        </li>
        <li class="mb-4">
          <span class="font-bold">Cross-platform: </span>Node.js is
          cross-platform and can be run on different operating systems,
          including Windows, Linux, and macOS.
        </li>
        <li class="mb-4">
          <span class="font-bold">Frameworks: </span> Node.js has many popular
          frameworks that can be used to build web applications, such as React,
          Angular, NextJS.
        </li>
        <li class="mb-4">
          <span class="font-bold">Security: </span>Node.js applications can be
          vulnerable to security issues such as injection attacks, so it's
          important to follow best practices such as validating user input and
          using secure coding practices.
        </li>
        <li class="mb-4">
          <span class="font-bold">Debugging: </span> Node.js comes with a
          built-in debugging tool that allows developers to debug code in
          real-time.
        </li>
        <li class="mb-4">
          <span class="font-bold">Community: </span> Node.js has a large and
          active community of developers who contribute to its development,
          create libraries and frameworks, and provide support to other
          developers through forums and other resources.
        </li>
      </ul>
      <h2 className="text-2xl mt-8">
        Process: Gives you access to the currently running node process.
      </h2>
      <ul>
        <li class="mb-4">
          * process.platform: Can use to check the operating system.
        </li>
        <li class="mb-4">
          * process.env.USER: Can give an environment variable from server
        </li>
      </ul>
      <div>
        <h2 className="text-2xl mt-5">How events work?</h2>
        Node.JS is an asynchronous event-driven javascript runtime. The runtime
        implements a thing called an event loop, just like a web browser does
        and it allows node to push intensive operations off to a separate thread
        so only very fast non-blocking operations happen on the main thread.
        This design makes node.js very suitable for things that require high
        throughput like real-time applications and web-servers.
      </div>
      <h2 className="text-2xl mt-5">Events & Callbacks</h2>
      <SyntaxHighlighter language="javascript" style={nord}>
        {`process.on('exit', function() {})`}
      </SyntaxHighlighter>
      <div className="mt-5">Exit = Event</div>
      <div>function() = Callback</div>
      <div className="mt-5">
        Before a node process finishes it emits an event named exit. We can
        listen to this event using ‘on’ and then register a callback function as
        the second argument.
      </div>
      <div className="mt-5">
        When the exit event occurs, nodejs will run this function and that’s
        where it gets the name callback because the function isn’t called the
        first time node.js sees it. It’s only called after the exit event occurs
        at some point in the future. This is built in but you can also create
        your own from scratch.{" "}
      </div>
      <h2 className="text-2xl mt-5">Require vs Import</h2>
      <div>
        One of the major differences between require() and import() is that
        require() can be called from anywhere inside the program whereas
        import() cannot be called conditionally, it always runs at the beginning
        of the file.
      </div>
      <div>
        require() - In JavaScript, require is used in Node.js to load modules.
        It is a synchronous function that is used to load a module and return
        its exports.
      </div>
      <div>
        import() - In modern JavaScript (ES6 and later) to import modules. It is
        an asynchronous function that is used to load a module and bind its
        exports to a local variable.
      </div>
      <div className="my-5">
        We can also create a custom event emitter by instantiating the class and
        then we'll register a callback that fires on the lunch event now that
        the callback is registered, you can simply call event emitter emit with
        that event name, and that triggers your callback function to run
      </div>
      <SyntaxHighlighter language="javascript" style={nord}>
        {`const {EventEmitter} = require('events')
const eventEmitter = new EventEmitter();
        
eventEmitter.on('lunch', () => {
  console.log('yum')
})

eventEmitter.emit('lunch')
        `}
      </SyntaxHighlighter>
      <div className="mt-5">
        This event driven style of programming is extremely useful when you have
        something that is cpu intensive.
      </div>
      <h2 className="text-2xl mt-5">File System</h2>
      <div className="mt-5">
        A built-in file system module 'fs' it can read, write, and delete files
        on the file system among other things and it can also do things in a
        blocking or non-blocking way
      </div>
      <SyntaxHighlighter language="javascript" style={nord}>
        {`const { readFile, readFileSync } = require("fs");`}
      </SyntaxHighlighter>
      <div className="mt-5">
        Anytime you see a function that ends in sync, think 'blocking' or in
        other words it will need to finish all of its work before any of your
        other code can run.
      </div>
      <SyntaxHighlighter language="javascript" style={nord}>
        {`const txt = readFileSync('./hello.txt', 'utf-8')
console.log(txt)
console.log('do this asap')`}
      </SyntaxHighlighter>
      <div className="mt-5">
        We can read a text file in code by simply passing the path to that file
        and then we'll specify the encoding as utf-8
      </div>
      <div className="mt-5">
        Reading a file might take awhile, especially if it's a very large file.
        And what you will notice here when we run our code, is that the second
        console.log won't run until after that file has been read.
      </div>
      <SyntaxHighlighter language="text" style={nord}>
        {`hello from hello.txt
do this asap`}
      </SyntaxHighlighter>
      <div className="mt-5">
        Luckily, you can make your code non-blocking by refactoring this to a
        callback with readfile. We pass the same first two arguments and then
        add a callback function as the third argument. Inside the function, we
        can access an error object if the operation fails or when successful,
        the actual text from the file.
      </div>
      <SyntaxHighlighter language="javascript" style={nord}>
        {`readFile('./hello.txt', 'uft8', (err, txt) => {
  console.log(txt)
})
console.log('do this ASAP')
        `}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="text" style={nord}>
        {`do this asap
hello from hello.txt`}
      </SyntaxHighlighter>
      <div className="mt-5">
        Although the console log to the text file comes first in our script,
        it's not the first thing that gets executed. Node registers the callback
        then executes the rest of the script and finally runs the callback when
        the file has been read. There is another way, which is promises.
      </div>
      <h2 className="text-2xl mt-5">Promises</h2>
      <div className="mt-5">
        Promises are also asynchronous and non-blocking. They tend to produce
        much cleaner code when compared to callbacks.
      </div>
      <SyntaxHighlighter language="javascript" style={nord}>
        {`const {readFile} = require('fs').promises;`}
      </SyntaxHighlighter>
      <div className="mt-5">
        Notice how in this example, we are importing readfile from the promises
        namespace. This gives us a function that returns a promise when called.
        You can use await to resolve the promise here at the top of the script.
        You can also use async function to wrap it to make your code much easier
        to read especially when you have multiple async calls in the same
        function.
      </div>
      <SyntaxHighlighter language="javascript" style={nord}>
        {`async function hello(){
  const file = await readFile('./hello.txt', 'utf8')
}`}
      </SyntaxHighlighter>
      <h2 className="text-2xl mt-5">Modules & NPM</h2>
      <div className="mt-5">
        Modules is nothing more than a javascript file that exports its code.
        Node has a bunch of built-in modules like 'fs' and 'events' that we've
        already looked at. The traditional way to import a module node is to use
        this 'require()' function but there is ES modules which uses
        import/export syntax. Most node.js code out there written in vanilla
        javascript still uses require however.
      </div>
      <div>
        {" "}
        How it works is that you can import/export your code from other code.
      </div>
      <div className="mt-5">my-module.js</div>
      <SyntaxHighlighter language="javascript" style={nord}>
        {`module.exports = {
science: '',
math: '',
english: ''
}`}
      </SyntaxHighlighter>
      <div className="mt-5">index.js</div>
      <SyntaxHighlighter language="javascript" style={nord}>
        {`const myModule = require('./my-module');
console.log(myModule)        `}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="text" style={nord}>
        {`science: '',
math: '',
english: ''`}
      </SyntaxHighlighter>
      <div className="mt-5">
        This code is now available to use in any other file but if you wish to
        use someone else's code, and a primary place to do that is a via node
        package manage or npm which was acquired by github, which was acquired
        by microsoft.{" "}
      </div>
      <div className="mt-5">
        You can use npm, remote packages to use in your code. To use it, you
        open a terminal and open the command line and run 'npm init', we'll use
        the '-y' flag to create a default options and what you'll notice is that
        it creates a package.json file. This file contains metadata about your
        project but most importantly, it keeps track of the dependencies that
        you use here.
      </div>
      <h2 className="text-2xl mt-5">Express</h2>
      <div className="mt-5">
        Express is a minimal web application framework and one of the most
        popular third-party node modules. Installing 'express' will add the into
        the dependencies and pegged it to a specific version. This dependencies
        object allows you to manage multiple dependencies in a project and
        create different routes for apis
        <span className="text-red-600">
          {" "}
          You should never have to modify the code in the node modules
          directory.
        </span>{" "}
        That's because packagae json controls how this directory is built. It
        fetches your remote packages, saves the source code here and that
        process should be able to be repeated on any system.
      </div>
      <div>
        Now we have covered all the general knowledge, we should be able to
        build a full stack application and deploy it.
      </div>
    </div>
  );
}

export default basicNodeJS;

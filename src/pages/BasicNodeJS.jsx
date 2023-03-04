import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";

function basicNodeJS() {
  // const { readFile, readFileSync } = require("fs");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">NodeJS</h1>
      <div>
        Process: Gives you access to the currently running node process.
        <ul>
          <li>* process.platform: Can use to check the operating system.</li>
          <li>
            * process.env.USER: Can give an environment variable from server
          </li>
        </ul>
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
        This code is not available to use in any other file but if you wish to
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
        object allows you to manage multiple dependencies in a project and then
        reinstall them all at once on a different system.{" "}
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

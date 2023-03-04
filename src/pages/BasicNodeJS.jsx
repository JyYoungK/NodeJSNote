import React, { useState, useCallback, useMemo } from "react";
import List from "./list";
import List2 from "./list2";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";

function basicNodeJS() {
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
    </div>
  );
}

export default basicNodeJS;

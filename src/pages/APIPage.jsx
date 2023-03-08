import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";

function APIPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">
        Frontend Knowledge that you might not know
      </h1>
      <h2 className="text-2xl mt-5">SPA vs MPA</h2>
      <div className="mt-5">
        One scenario where React Router can be useful is when you have a SPA
        that needs to communicate with a server API. React Router can handle the
        client-side routing for your app, while the server-side code handles the
        data fetching and processing. For example, let's say you're building an
        e-commerce website with React. You want to have a product page where
        users can view details about a particular product. You also want to have
        a shopping cart page where users can see the items they've added to
        their cart.
      </div>
      <h2 className="text-2xl mt-5">Real DOM vs Virtual DOM</h2>
      <div className="mt-5">
        For example, websites built with React are known to use the Virtual DOM,
        while websites built with jQuery are known to use the Real DOM. However,
        it's important to note that this is not always the case since frameworks
        like Angular can use both Real DOM and Virtual DOM depending on how they
        are configured.
      </div>
      <div className="mt-5">
        As for a popular website that uses the Real DOM, one example is Amazon.
        Amazon is built using a combination of server-side rendering and
        client-side rendering with a mix of vanilla JavaScript, jQuery, and
        other libraries. These technologies use the Real DOM to manipulate the
        page and update its contents. On the other hand, a popular website that
        uses the Virtual DOM is Facebook. Facebook's frontend is built using
        React, which is known for its Virtual DOM implementation. React allows
        Facebook to build complex UI components while optimizing the rendering
        process by minimizing the number of updates to the DOM.
      </div>
      <h2 className="text-2xl mt-5">Load Balancers</h2>
      <div className="mt-5">
        To distribute traffic to many different web servers in order to help
        with throughput latency, scalability,
      </div>
      <div className="mt-5">
        “When a user visits a website, instead of hitting a single computer and
        it can take the single hosting machine down for instance, you can put a
        load balancer in front of that request and then that load balancer will
        route the client request to a number of different web servers”{" "}
      </div>
      <h2 className="text-2xl mt-5">Little bit of Redux</h2>
      <div className="mt-5">
        The main idea behind Redux is to keep the state of an application in a
        single immutable state tree, which can only be modified by dispatching
        actions. Actions are plain JavaScript objects that describe what
        happened in the application, and they are the only way to change the
        state. Reducers are functions that receive the current state and an
        action and return a new state based on the action. Redux also supports
        middleware, which is a way to extend the behavior of Redux by adding
        extra functionality to the dispatch process. Middleware can be used for
        things like logging, routing, or handling asynchronous actions.
      </div>
      <div class="hover:text-blue-500 mt-5">
        <a href="https://www.youtube.com/watch?v=_shA5Xwe8_4">
          Watch this Video
        </a>
      </div>
      <h2 className="text-3xl mt-5">
        There are many ways to call APIs and here are 3
      </h2>
      <div className="text-2xl mt-5">
        Fetch (Basic - No require additional libraries)
      </div>
      <SyntaxHighlighter language="javascript" style={nord}>
        {`export async function APIcall(prompt) {
    const response = await fetch("https://yourstoryai.onrender.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            prompt: prompt,
        }),
    });
          
          
    if (response) {
         const data = await response.json();
          return data.bot;
    } else {
         alert("Error generating a new sentence");
    }
}

…How to Call
const handleSubmit = async () => {
    try {
        APIcall(prompt).then((data) => {
`}
      </SyntaxHighlighter>
      <div className="text-2xl mt-5">Axios (Javascript Library)</div>
      <SyntaxHighlighter language="javascript" style={nord}>
        {`import axios from "axios";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    params: {
        maxResults: 20,
    },
    headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};


export const fetchFromAPI = async (url) => {
    const { data } = await axios.get('$(BASE_URL)/$(url)', options);

    return data;
};

…How to Call    
fetchFromAPI("search?part=snippet&q=New").then((data) => {
`}
      </SyntaxHighlighter>
      <div className="text-2xl mt-5">Redux Toolkit (Redux application)</div>
      <SyntaxHighlighter language="javascript" style={nord}>
        {`export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
    getSongsByGenre: builder.query({
      query: (genre) => '/charts/genre-world?genre_code=$genre)',
    }),
  }),
});


export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
} = shazamCoreApi;




…How to call
import { useGetSongsByGenreQuery } from "../utils/redux/services/shazamCore";
  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId || "POP"
  );
`}
      </SyntaxHighlighter>
    </div>
  );
}

export default APIPage;

import React, { useState } from "react";
import APIPage from "./pages/APIPage";
import APIPage2 from "./pages/APIPage2";
import BasicNodeJS from "./pages/BasicNodeJS";
import NodeJSCode from "./pages/NodeJSCode";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  let pageContent;
  switch (currentPage) {
    case 1:
      pageContent = <APIPage />;
      break;
    case 2:
      pageContent = <APIPage2 />;
      break;
    case 3:
      pageContent = <BasicNodeJS />;
      break;
    case 4:
      pageContent = <NodeJSCode />;
      break;
    default:
      pageContent = <APIPage />;
  }
  return (
    <div className="">
      <div className=""> {pageContent}</div>
      <div className="py-6 text-center text-white">
        {currentPage === 1 && (
          <button
            className="mx-2 rounded-md bg-red-400 p-3 text-md"
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            API Page 2
          </button>
        )}
        {currentPage === 2 && (
          <div>
            <button
              className="mx-2 rounded-md bg-red-400 p-3 text-md"
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
            >
              API Page
            </button>
            <button
              className="mx-2 rounded-md bg-red-400 p-3 text-md"
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            >
              NodeJS Note
            </button>
          </div>
        )}
        {currentPage === 3 && (
          <div>
            <button
              className="mx-2 rounded-md bg-red-400 p-3 text-md"
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
            >
              API Page 2
            </button>
            <button
              className="mx-2 rounded-md bg-red-400 p-3 text-md"
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            >
              NodeJS Code
            </button>
          </div>
        )}
        {currentPage === 4 && (
          <div>
            <button
              className="mx-2 rounded-md bg-red-400 p-3 text-md"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              NodeJS Note
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

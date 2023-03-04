import React, { useState } from "react";
import BasicNodeJS from "./pages/BasicNodeJS";
import NodeJSCode from "./pages/NodeJSCode";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  let pageContent;
  switch (currentPage) {
    case 1:
      pageContent = <BasicNodeJS />;
      break;
    case 2:
      pageContent = <NodeJSCode />;
      break;
    default:
      pageContent = <BasicNodeJS />;
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
            useCallback vs UseMemo
          </button>
        )}
        {currentPage === 2 && (
          <div>
            <button
              className="mx-2 rounded-md bg-red-400 p-3 text-md"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              useState vs UseRef
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

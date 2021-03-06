import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex w-full items-center justify-between flex-wrap bg-white py-2 lg:px-12 shadow border-solid border-t-2 border-blue-700">
        <div className="menu w-full lg:block flex-grow flex lg:items-center lg:w-auto lg:px-3 px-8">
          <div className="flex ">
            <a
              href="/"
              className="block mr-10 text-sm px-2 py-1 lg:py-2 lg:px-4 lg:text-md border border-blue-900 text-center rounded text-blue-700 ml-2 font-bold hover:text-blue-900 mt-4 hover:bg-blue-100 lg:mt-0"
            >
              <h1>HOME</h1>
            </a>
            <a
              href="/create"
              className="block text-sm px-2 py-1  lg:py-2 lg:px-4 lg:text-md rounded border border-blue-900 text-center text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
            >
              Create Notes
            </a>

            <a
              href="/mynotes"
              className=" block text-sm px-2 border  lg:py-2 lg:px-4 lg:text-md border-blue-900 text-center  ml-2 py-1 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
            >
              My Notes
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

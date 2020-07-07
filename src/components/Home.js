import React from "react";

function Home() {
  return (
    <div>
      <div className="container mt-10  m-0 m-auto py-12 px-4">
        <div className=" w-1/2 m-0 m-auto  lg:max-w-lg lg:flex bg-red-800 rounded-lg border shadow-lg pb-6 lg:pb-0">
          <div className="w-full  p-4">
            <div className="inline-grid">
              <p className="work-sans font-bold text-4xl text-center text-white">
                My Notes
              </p>
              <p className="raleway text-2xl my-4 text-white opacity-75">
                A Platform to save daily notes
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center m-0 m-auto -mt-8 rounded-b-lg max-w-xs lg:max-w-lg lg:-mt-8 lg:justify-end lg:pr-8 py-1">
          <a
            href="/create"
            className="text-white py-3 px-4 rounded-lg bg-blue-500"
          >
            <p className="work-sans font-semibold text-sm tracking-wide">
              Get Started
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

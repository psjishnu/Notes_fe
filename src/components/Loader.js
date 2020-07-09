import React from "react";
export const Loading = ({ msg }) => {
  return (
    <div className="flex justify-center items-center p-10">
      <div className=" text-center text-white font-semibold text-2xl ">
        {/* <img src={img} className="App-logo" alt="logo" /> */}
        {msg}
        {msg === undefined && <div>Loading....</div>}
      </div>
    </div>
  );
};

export const FullLoading = ({ msg, color = "orange-400" }) => {
  return (
    <div
      className={`h-screen w-full items-center flex flex-col justify-center overflow-hidden bg-${color}`}
    >
      <Loading msg={msg} />
    </div>
  );
};

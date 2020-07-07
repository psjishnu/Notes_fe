import React, { useEffect, useState } from "react";
import { getdetails } from "../Redux/actions";
import { useDispatch } from "react-redux";

function MyNotes() {
  const [result, setresult] = useState({});
  var item = [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getdetails()).then((res) => {
      setresult(res.data.notes);
    });
  }, []);

  if (result != undefined)
    for (var i = result.length; i > 0; i--) {
      item = item.concat(result[i - 1]);
    }
  console.log(item);
  return (
    <div className="bg-orange-400  h-full p-5 w-full ">
      {item.length == 0 && (
        <div className="bg-yellow-300 mt-2 hover:bg-yellow-400 m-0 m-auto w-1/2 p-3">
          No Notes
        </div>
      )}
      {item.map((value, index) => {
        if (value.title !== "")
          return (
            <div
              key={index}
              className="bg-yellow-300 mt-2 hover:bg-yellow-400 m-0 m-auto w-1/2 p-3"
            >
              <h2 className="text-lg text-bolder text-center m-0 m-auto">
                {value.title} <span className="text-sm">{value.id}</span>
              </h2>
              <p className="px-8 text-md text-gray-800 text-justify">
                {value.content}
              </p>
            </div>
          );
      })}
    </div>
  );
}

export default MyNotes;
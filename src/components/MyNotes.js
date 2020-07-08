import React, { useEffect, useState } from "react";
import { getdetails, deleteNote } from "../Redux/actions";
import { useDispatch } from "react-redux";

function MyNotes() {
  const [result, setresult] = useState({});
  var item = [];
  const dispatch = useDispatch();
  const [refresh, setrefresh] = useState(Math.random());

  useEffect(() => {
    dispatch(getdetails()).then((res) => {
      setresult(res.data.notes);
    });
  }, [refresh, dispatch]);
  const handledelete = (x) => {
    if (window.confirm("Confirm Delete ?"))
      dispatch(deleteNote({ inputid: x })).then((res) => {
        setrefresh(Math.random());
      });
  };

  if (result !== undefined)
    for (var i = result.length; i > 0; i--) {
      if (result[i - 1] !== null) item = item.concat(result[i - 1]);
    }
  return (
    <div className="bg-orange-400  h-full p-5 w-full ">
      {item.length === 0 && (
        <div className="bg-yellow-300 mt-2 hover:bg-yellow-400 m-0 m-auto w-full lg:w-1/2 p-3">
          No Notes
        </div>
      )}
      {item.map((value, index) => {
        return (
          <div
            key={index}
            className="bg-yellow-300 py-2 px-1 mt-2 hover:bg-yellow-400 m-0 m-auto w-full md:w-3/4 shadow-lg lg:w-1/2 "
          >
            <div className="flex flex-row">
              <div className="w-4/5 text-sm">{value.id}</div>
              <div className="w-1/5 text-right">
                <button
                  className="p-1 mr-1 mt-1 rounded text-white font-semibold bg-red-500"
                  onClick={() => handledelete(value.id)}
                >
                  delete
                </button>
              </div>
            </div>
            <h2 className="text-lg font-bold text-center m-0 m-auto">
              {value.title}
            </h2>
            <p className="px-2 text-md text-gray-800 text-justify">
              {value.content}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default MyNotes;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postdetails } from "../Redux/actions";
import { Notification } from "react-pnotify";

function Notes() {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const dispatch = useDispatch();
  const [done, setdone] = useState(false);
  const [error, seterror] = useState(false);
  let form;

  const handleSubmit = (e) => {
    console.log(error);
    form = {
      title: title,
      content: content,
    };
    if (title === "") {
      seterror(!error);
      form = { title: "TITLE_EMPTY!!", content: content };
    } else {
      dispatch(postdetails(form)).then((res) => {
        setdone(false);
        if (res.status === 201) {
          setdone(true);
          setcontent("");
          settitle("");
        } else {
          seterror(false);
          seterror(true);
        }
      });
      e.preventDefault();
    }
  };

  return (
    <div>
      {done && (
        <Notification
          type="success"
          title="Saved notes"
          text="Notes saved succesfully"
          delay={3000}
          shadow={false}
          hide={true}
          nonblock={true}
          desktop={true}
        />
      )}
      {error && (
        <Notification
          type="error"
          title="Error"
          text="Error Occured"
          delay={3000}
          shadow={false}
          hide={true}
          nonblock={true}
          desktop={true}
        />
      )}{" "}
      <div className="px-1 flex">
        <div className="flex-col flex rounded bg-yellow-700 shadow-lg  m-0 m-auto items-center w-full lg:w-1/2 my-2 md:w-3/5">
          <h1 className="font-bold text-4xl my-8 text-white"> Add Notes </h1>
          <div className="mt-2 flex flex-col  w-3/4">
            <div className="flex w-full mb-4 relative h-15 bg-white rounded mb-6">
              <div className="flex justify-center"></div>
              <input
                type="text"
                className="flex-shrink flex-grow bg-gray-200 flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                placeholder="Title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap rounded items-stretch w-full relative h-15 bg-white items-center rounded mb-4">
              <textarea
                type="text"
                style={{ minHeight: "200px" }}
                value={content}
                className="resize-y px-3 py-3 bg-gray-200 rounded flex-grow flex-auto leading-normal  flex-1 border-0  px-1 relative self-center font-roboto text-sm outline-none"
                placeholder="type your notes"
                onChange={(e) => setcontent(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-600 py-4 text-center text-bold text-sm px-5  text-white rounded leading-tight mb-10"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;

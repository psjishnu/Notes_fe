import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postdetails, getdetails } from "../Redux/actions";
import { Notification } from "react-pnotify";

function Notes() {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const dispatch = useDispatch();
  const [done, setdone] = useState(false);
  const [error, seterror] = useState(false);
  let form;

  const handleSubmit = (e) => {
    form = {
      title: title,
      content: content,
    };
    if (title == "") {
      form = { title: "TITLE_EMPTY!!", content: content };
    }
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
      <div className=" flex">
        <div className="flex-col flex bg-yellow-700 shadow-lg  ml-auto mr-auto items-center w-full lg:w-1/2 my-2 md:w-3/5">
          <h1 className="font-bold text-4xl my-8 text-white"> Add Notes </h1>
          <form
            action=""
            onSubmit={handleSubmit}
            method="POST"
            className="mt-2 flex flex-col lg:w-1/2 w-8/12"
          >
            <div className="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
              <div className="flex -mr-px justify-center w-15 p-4">
                <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                  <i className="fas fa-user-circle"></i>
                </span>
              </div>
              <input
                type="text"
                className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                placeholder="Title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4">
              <div className="flex -mr-px justify-center w-15 p-4">
                <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
              <textarea
                type="text"
                value={content}
                className="resize-y min-h-20 flex-grow flex-auto leading-normal  flex-1 border-0  px-1 relative self-center font-roboto text-lg outline-none"
                placeholder="type your notes"
                onChange={(e) => setcontent(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 py-4 text-center text-bold text-xl px-17 md:px-12 md:py-4 text-white rounded leading-tight md:text-base font-sans mt-4 mb-20"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Notes;

import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="text-center py-4 shadow-md w-6/12 bg-slate-400">
        <label className="block text-xl mb-2" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your e-mail"
          className="p-4 w-full mb-4 border border-black-100 "
        />

        <label className="block text-xl mb-2 " htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Type your message here"
          className="p-4 w-full h-32 mb-4"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

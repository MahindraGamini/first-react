import React from "react";

const About = () => {
  return (
    <div className="border box-border border-x-yellow-300 p-8">
      <h1 className="text-center font-bold py-4 text-2xl">G Sai Mahindra</h1>
      <img
        className="w-3/12 mx-auto rounded-full"
        src='https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D'
        alt="An image"
      />
      <p className="mt-4 text-center text-gray-600">
        Welcome to my personal website! I'm G Sai Mahindra, a passionate
        developer and creative individual. This is a space where I share my
        thoughts, projects, and experiences. Feel free to explore and connect
        with me.
      </p>
    </div>
  );
};

export default About;

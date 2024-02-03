import React from "react";

const Shimmer = () => {
  return (
    <div className="restlist">
      {Array(20).fill("").map((_, index) => (
        <div className="shimmer-card" key={index}></div>
      ))}
    </div>
  );
};

export default Shimmer;

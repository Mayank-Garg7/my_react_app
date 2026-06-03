import React from "react";

function Card({ children }) {
  return (
    <div draggable  className="bg-white shadow-md rounded-xl p-3 border border-gray-200 hover:shadow-lg transition duration-300 mb-3" >
      {children}
    </div>
  );
}

export default Card;
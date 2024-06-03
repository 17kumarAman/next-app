import React from "react";

function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-40 h-40 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;

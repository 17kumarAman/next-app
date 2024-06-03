import React from 'react';

const Card = ({ imgSrc, title, price }) => {
  return (
    <div className="w-60 bg-[#141414] rounded-lg shadow-4xl  hover:scale-105 ">
      <img
        src={imgSrc}
        alt={title}
        className="h-60 m-auto w-full rounded-t-lg"
      />
      <div className="p-4 ">
        <h3 className="font-semibold text-white hover:text-blue-600">{title.length>=55?title.slice(0,55)+("..."):title}</h3>
        <p className="mt-2 text-sm text-white"> ${price}</p>
      </div>
    </div>
  );
};

export default Card;

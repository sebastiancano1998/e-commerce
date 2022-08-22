import React from "react";

const TimeLineItem = ({ title, description, icon }) => {
  return (
    <div className="text-sm text-p2 relative odd:pl-1.4 odd:pr-4 even:pr-6 even:pl-4 even:after:shadow-evenshadow odd:after:shadow-oddshadow bg-white flex flex-col justify-end w-1/2 odd:self-end odd:justify-start after:absolute after:w-4 after:h-4 after:rotate-45 after:top-45 after:right-4 after:bg-white  odd:after:left-0.9 before:border-2 before:border-p2 before:w-4 before:h-4 before:rounded-full before:absolute before:z-1 before:bg-white even:before:right-even-circle odd:before:left-odd-circle before:top-45 text-center">
      <div className="flex flex-col shadow-shadow1 bg-white p-2 rounded-lg">
        <p className="font-semibold">{title}</p>
        <p className="text-xs p-1">{description}</p>
        <span className="text-p1 self-center text-5xl py-4">{icon}</span>
      </div>
    </div>
  );
};

export default TimeLineItem;

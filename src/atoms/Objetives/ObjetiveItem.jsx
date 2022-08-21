import React from "react";

const ObjetiveItem = ({icon, title, subtitle}) => {
  return (
    <div className="flex flex-col justify-center">
      <span className="text-5xl text-p1 xl:text-6xl">{icon}</span>
      <div className="">
        <p className="text-p1 font-bold py-2">{title}</p>
        <p className="text-p1 text-sm">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ObjetiveItem;

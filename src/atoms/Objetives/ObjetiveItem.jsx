import React from "react";

const ObjetiveItem = ({icon, title, subtitle}) => {
  return (
    <div className="flex flex-col justify-center sm:max-w-xs">
      <span className="text-5xl xl:text-6xl">{icon}</span>
      <div className="">
        <p className="font-bold py-2">{title}</p>
        <p className="text-sm">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ObjetiveItem;

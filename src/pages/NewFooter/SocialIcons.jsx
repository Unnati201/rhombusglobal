import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-[217 100 39]">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-1 cursor-pointer inline-flex items-center
        rounded-full bg-[#EEEEEE] mx-1.5 text-2xl hover:text-gray-100 hover:bg-[#0086b3]
        duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
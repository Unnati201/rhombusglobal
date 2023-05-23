import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-[217 100 39]">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-1 cursor-pointer inline-flex items-center
        rounded-full bg-[#222] mx-1.5 text-2xl hover:text-gray-100 hover:bg-[#007bff]
        duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
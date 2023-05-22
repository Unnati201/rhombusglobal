import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold text-lg ">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="hover:text-[#0086b3] duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
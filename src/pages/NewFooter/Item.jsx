import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-2 font-semibold ml-10 text-2xl font-mulish ">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="hover:text-[#007bff] duration-300
          text-sm  ml-10 cursor-pointer leading-7"
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
import React, { useState } from "react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("item1");
  const [content, setContent] = useState("Content for Department");

  const handleMouseEnter = (item, content) => {
    setActiveItem(item);
    setContent(content);
  };

  return (
    <div className="flex">
      <ul className="w-30 border-r border-gray-200">
        <li
          className={`py-2 px-4 cursor-pointer ${
            activeItem === "item1" ? "bg-gray-100" : ""
          } transition-colors`}
          onMouseEnter={() =>
            handleMouseEnter("item1", "Content for Department")
          }>
          {" Department "}
        </li>
        <li
          className={`py-2 px-4 cursor-pointer ${
            activeItem === "item2" ? "bg-gray-100" : ""
          } transition-colors`}
          onMouseEnter={() =>
            handleMouseEnter("item2", "Content for UG Programs")
          }>
          {"UG Programs"}
        </li>
        <li
          className={`py-2 px-4 cursor-pointer ${
            activeItem === "item3" ? "bg-gray-100" : ""
          } transition-colors`}
          onMouseEnter={() =>
            handleMouseEnter("item3", "Content for PG Programs")
          }>
          {"PG Programs"}
        </li>
        <li
          className={`py-2 px-4 cursor-pointer ${
            activeItem === "item4" ? "bg-gray-100" : ""
          } transition-colors`}
          onMouseEnter={() =>
            handleMouseEnter("item4", "Content for Resources")
          }>
          {"Resources"}
        </li>
        <li
          className={`py-2 px-4 cursor-pointer ${
            activeItem === "item5" ? "bg-gray-100" : ""
          } transition-colors`}
          onMouseEnter={() =>
            handleMouseEnter("item5", "Content for Admission")
          }>
          {"Admission"}
        </li>
      </ul>
      <div className="w-70 border-l border-gray-200 p-4">{content}</div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import "./ListItem.css";

const ListItem = ({ item, index, onDelete, }) => {
  const handleDeleteOne = () => {
    console.log(index);
    onDelete(index);
  };
  return (
    <div className="list">
      <div className="link">
        <a target="_blank" href={item.link}>
          {item.name}
        </a>
      </div>
      <div className="del-btn">
        <button onClick={handleDeleteOne} className="del-btn">
          X
        </button>
      </div>
    </div>
  );
};

export default ListItem;

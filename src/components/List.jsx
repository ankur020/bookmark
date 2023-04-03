import React from "react";
import ListItem from "./ListItem";
import './List.css';

export default function List({ leads,onDelete }) {
  return (
    <>
      <div className="list-item">
        {leads.map((item,index) => {
          //console.log(index)
          return <ListItem item={item} index={index} onDelete={onDelete} />;
        })}
      </div>
    </>
  );
}

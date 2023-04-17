import React from "react";

import { FaSearch, FaTrashAlt } from "react-icons/fa";

import "./index.css";

const ListItem = ({ name, date, onSearch, onDelete }) => {
  return (
    <div className="list-item-container">
      <p className="list-item-name">{name}</p>
      <p className="list-item-datetime">{date}</p>
      <div className="list-item-end">
        <button onClick={() => onSearch()}>
          <FaSearch className="icon" />
        </button>
        <button onClick={() => onDelete()}>
          <FaTrashAlt className="icon" />
        </button>
      </div>
    </div>
  );
};

export default ListItem;

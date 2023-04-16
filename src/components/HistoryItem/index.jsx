import React from "react";

import { FaSearch, FaTrashAlt } from "react-icons/fa";

import "./index.css";

const HistoryItem = ({ history, onSearch, onDelete }) => {
  return (
    <div className="history-item-container">
      <p className="history-item-location">{history.location}</p>
      <p className="history-item-datetime">{history.dateTime}</p>
      <div className="history-item-end">
        <button onClick={() => onSearch(history)}>
          <FaSearch className="icon" />
        </button>
        <button onClick={() => onDelete()}>
          <FaTrashAlt className="icon" />
        </button>
      </div>
    </div>
  );
};

export default HistoryItem;

import React, { useEffect } from "react";
import "./App.css";
import List from "./components/List";
import { useState } from "react";

export default function App() {
  let myLeads = [];
  const [myList, setMyList] = useState(myLeads.length);
  const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

  if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    <List link={myLeads} />;
  }

  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const saveInput = (e) => {
    e.preventDefault();
    myLeads.push(input);
    setInput("");
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    setMyList(myLeads.length);
  };
  const handleTab = (e) => {
    e.preventDefault();
    myLeads.push(window.location.toString());
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    setMyList(myLeads.length);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    localStorage.clear();
    myLeads = [];
    setMyList(myLeads.length);
  };

  const handleDeleteOne = (index) => {
    //console.log(index);
    myLeads.splice(index, 1);
    console.log(myLeads);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    setMyList(myLeads.length);
  };
  useEffect(() => {
    setMyList(myLeads.length);
  }, [myList]);
  return (
    <div>
      <form>
        <input
          type="text"
          id="input-el"
          placeholder="Your link here..."
          value={input}
          onChange={handleInput}
        />
        <div className="btn-container">
          <button
            id="input-btn"
            onClick={saveInput}
            type="submit"
            className="btn"
          >
            SAVE INPUT
          </button>

          <button id="tab-btn" onClick={handleTab} className="btn">
            SAVE TAB
          </button>
          <button id="delete-btn" onClick={handleDelete} className="btn">
            DELETE ALL
          </button>
        </div>
      </form>
      <div>
        <List leads={myLeads} onDelete={handleDeleteOne} />
      </div>
    </div>
  );
}

import React from "react";

export default function SearchBar() {
  return (
    <form className="search">
      <input className="search-input" type="text" />
      <button className="search-button"> Find Job</button>
    </form>
  );
}

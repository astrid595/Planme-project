import React from "react";
import "../styles/styleSearch.css";
import search from "../media/search-icon.png";

const Search = () => {
  return (
    <div className="search-sec">
      <img src={search} alt="" className="iconSearch" />
      <input type="Search" id="site-search" placeholder="Search task..." />
    </div>
  );
};

export default Search;

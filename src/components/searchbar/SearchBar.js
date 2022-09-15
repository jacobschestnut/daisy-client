import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

export const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [currentUserId, setCurrentUserId] = useState(JSON.parse(localStorage.getItem("userId")));
  
  const API = "http://localhost:8000"

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.username.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const handleFollow = (userId) => { // takes userId from filtered array as argument
    return fetch(`${API}/friends`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        currentUserId: currentUser.id,
        userId: userId,
      })
    }).then(response => response.json());
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div className="dataResultWrapper" key={value.id}>
                <Link className="dataItem" to={`/users/${value.id}`}>
                  <p>{value.username}</p>
                  <div className="space"></div>
                </Link>
                <button id="ejectBtn"><img src="http://simpleicon.com/wp-content/uploads/play1.png" id="ejectImg" type="button" onClick={() => handleFollow(value.id)}/></button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
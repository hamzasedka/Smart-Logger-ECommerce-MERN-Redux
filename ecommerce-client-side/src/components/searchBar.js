import React, { useState } from "react";
import "./styles/search.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { motion } from "framer-motion";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.productTitle
        .toLowerCase()
        .includes(searchWord.toLowerCase());
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

  return (
    <motion.div
      animate={{
        scale: 1,
      }}
      initial={{ scale: 0 }}
      transition={{
        delay: 0.2,
      }}
      className="search"
    >
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
        <motion.div
          animate={{
            scale: 1,
          }}
          initial={{ scale: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          className="dataResult"
        >
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <motion.div
                animate={{
                  scale: 1,
                }}
                initial={{ scale: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                }}
                key={key}
                className="dataItem"
                to={"shop/productDetails/" + value._id}
                target="_blank"
              >
                <p>{value.productTitle} </p>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </motion.div>
  );
}

export default SearchBar;

import React from "react";

const SearchBox = ({value, onChange}) => {
  return (
    <div className="input-group rounded">
      <input
        onChange={e => onChange(e.currentTarget.value)}
        value={value}
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <div className="input-group-text border-0" id="search-addon">
        <img
          src={require("../media/img/searchIcon.apng")}
          width="30"
          height="30"
          alt="searchIcon"
        />
      </div>
    </div>
  );
};

export default SearchBox;

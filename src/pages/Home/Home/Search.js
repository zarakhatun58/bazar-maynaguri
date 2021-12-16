import { TextField } from "@material-ui/core";
import { Autocomplete, createFilterOptions } from "@material-ui/lab";
import { FaSistrix } from "react-icons/fa";
import React from "react";

const Search = () => {
  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option,
  });

  // Sample options for search box
  const myOptions = [
    "onion",
    "potato",
    "tomato",
    "orange",
    "pineapple",
    "ginger",
    "capsicum",
    "bin",
    "meal",
    "breakfast",
    " lunch",
    "snacks",
    "dinner",
  ];

  return (
    <div style={{ marginLeft: "", marginTop: "" }}>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        filterOptions={filterOptions}
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Search for Products">
            <span style={{ textColor: "black" }}>
              <FaSistrix />{" "}
            </span>
          </TextField>
        )}
      />
    </div>
  );
};

export default Search;

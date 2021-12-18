import React from "react";

import EditProfile from "./../../Profile/EditProfile";
import Banner from "./../Banner";
import Search from "./Search/Search.js";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Search></Search>
      <EditProfile></EditProfile>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import "./SingleSearch.css";

const SingleSearch = ({ service }) => {
  const { name, img, price } = service;

  function handleSubmit(e) {
    alert("Your Order Successful");
    e.preventDefault();
  }
  return (
    <div>
      <div className="search_proo">
        <div className="srch_pic_box">
          <img src={img} alt="....." />
        </div>
        <div className="srch_dtls_box">
          <p>{name}</p>
          <p>{price}</p>
          <div className="text-center">
            <Link to="/addProdect">
              {" "}
              <button onClick={handleSubmit} type="submit">
                Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSearch;

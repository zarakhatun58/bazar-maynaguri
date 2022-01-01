import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ service }) => {
  const { name, img, price } = service;

  return (
    <div>
      <div className="search_proo">
        <div className="srch_pic_box">
          <img src={img} alt="....." />
        </div>
        <div className="srch_dtls_box">
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

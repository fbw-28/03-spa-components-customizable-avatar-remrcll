import React from "react";
import image from "./cat.jpg"; //here we import the image
import "./css/style.css";

// here we create the dummy content and export it

export default function Avatar({ size = "s", type = "square" }) { //here we destructure, and set defaults, so we don't have to use .props later
  return (
    <div className="card">
      <div className="image">
        <img className={`${size} ${type}`} src={image} alt="image" />
      </div>
      <div className="content">
        <p>Size {size}</p>
        <p>Type {type}</p>
      </div>
    </div>
  );
}

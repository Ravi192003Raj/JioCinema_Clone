// Render.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/catalogue.css";
import { ContentContext } from "./ContentContext";

const Render = (props) => {
  const { item} = props;
  const temp=useContext(ContentContext)
  return (
    <>
      <div className="product-item">
        <Link to={`/video/${item.id}?data=${encodeURIComponent(JSON.stringify(temp))}`} >
          {/* Assuming each item has an 'id' property */}
          <img src={item.src} alt="log" />
        </Link>
      </div>
    </>
  );
};

export default Render;

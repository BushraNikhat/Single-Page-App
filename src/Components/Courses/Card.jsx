import React from "react";
import { NavLink } from "react-router-dom";

// the card component is mapped inside courses component.
const Card = (props) => {
  return (
    <>
     <div className="col-lg-4 col-sm-6 col-12 mx-auto d-block courses-card-col d-flex  justify-content-center">
      <div className="card courses-card shadow ">
        <img src={props.imgsrc} className="card-img-top border-bottom-0" alt="cources-pic" />
        <div className="card-body text-center">
          <h4 className="ex-small-heading card-title">{props.title}</h4>
          <p className="card-text">
           {props.discription}
          </p>
         <button className="btn "> <NavLink to="/contact" className="anchor">
           Join Now
          </NavLink></button>
        </div>
      </div>
      </div>
    </>
  );
};
export default Card;

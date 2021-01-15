import React from "react";
import Homepage from "../Images/Homepage.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home  d-flex align-items-center" id="home">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto d-block ">
              <div className="row home-row d-flex  align-items-center">
                <div className="col-lg-6 col-md-5 col-12 mx-auto  home-left order-md-1 order-2  d-flex align-items-md-center text-center">
                  <div className="home-heading">
                    <h1 className="large-heading">
                      The Ultimate step towards your dream
                      <span className="">Job</span>
                    </h1>
                    <p className="home-para">Pay after placement</p>
                    <button className="btn">
                      <NavLink exact to="/courses" className="anchor">
                        Get started
                      </NavLink>
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 col-md-7 col-12 mx-auto   home-right order-md-2 order-1  d-flex align-items-md-center justify-content-center">
                  <img
                    src={Homepage}
                    alt="home-pic"
                    className="img-fluid home-pic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
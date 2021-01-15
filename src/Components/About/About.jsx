import React from "react";
import Cdata from "./AboutCompany.jsx";
import Ddata from "./AboutDevloper.jsx";


const About = () => {
  return (
    <>
      <section className="about " id="about">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto d-block">
              <div className="row ">
            <div className="about-heading col-12 mx-auto d-block">
               <h2 className="medium-heading text-center">Highly experienced Mentors for your<span> Personal guidance</span></h2>
               <p className="text-center">Your will be guided by mentors working in MNC and you will get 1 on 1 professional and personal guidance for helping you land into your dream job.</p>
               <p className="about-border mx-auto"></p>
               </div>
              </div>

              <div className="row mentor-row">
              {/* The map function below ,maps the mentor data comming from About Developer array*/}
                {
                  Ddata.map((val,ind)=>{
                   return( <div className="col-md-4 col-8 mx-auto d-block  d-flex flex-column align-items-center mentor-col " key={ind}>
                    <img src={val.imgDeveloper} alt="developer-pic" className="img-fluid developer-img "/>
                    <div className="mentor text-center">
                    <h4 className="ex-small-heading">
                       {val.name}
                    </h4>
                    <p>{val.pos}</p>
                    <p>{val.comp}</p>
                    </div>
                </div> )
                  })
                }
            </div>

            <div className="row company-row ">
              {/* The map function below ,maps the Company data  comming from About Company array*/}
            {
              Cdata.map((val,index)=>{
                return (
                  <div className="col-md-2 col-4 d-flex justify-content-center" key={index}>
                    <img src={val.imgcompany} alt="company-pic" className="img-fluid company-img" />
                </div>
                )
              })
            }
               
               
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;

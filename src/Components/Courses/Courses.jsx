import React from "react";
import Card from "./Card.jsx";
import Sdata from "./Sdata";

const Courses = () => {
  return (
    <>
      <section className="Courses" id="Courses">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-sm-10 col-12 mx-auto d-block">
             <h2 className="medium-heading text-center course-heading"><span>Courses</span> We Provide</h2>
              <div className="row gy-5 courses-card-row">
               {/* the map function below ,maps the courses data comming from Sdata array */}
                {Sdata.map((val,index)=>{
                            return <Card key={index} imgsrc={val.imgsrc} title={val.title} discription={val.discription}/>
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
export default Courses;

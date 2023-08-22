// import {FaCommentDots} from "react-icons/fa"
// import {TbCircleDot , FaChartBar,} from "react-icons/tb";
import {BsCheckAll} from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Start.scss";
import  Fetchservic_start from "../../component/Startdashboard"
import Loading from "../../component/loading/Loading"
import React from "react";
const Start = () => {
 const {data_start , Loadding_start} =  Fetchservic_start()

  return (
    <React.Fragment>
           {/* testimonial */}
        

<section className="wrapper-testimonial">
  <div className="container">
    <div className="testimonial-content">
      <h2>Trygga lösningar för er ekonomi.</h2>
      <p>Vinst Redovisning i Jönköping AB erbjuder helhetslösningar och enskilda tjänster inom bokföring, redovisning, rådgivning, lön och konsultationer. </p>
      <Link to="/Kontakt" className="custom-btn btn-12" > <span>Click!</span><span>KONTAKTA OSS</span></Link>
    </div>
  </div>
</section>

           {/* services */}
           {
            Loadding_start ? <Loading /> :<section className="wrapper-services">
            <div className="container">
              <div className="parent-content">
                <div className="row">
                
                {
                  data_start.map((item) => {
                    return (
                      <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                      <div className="serviecs-content">
                          <div className="icon">
                          <BsCheckAll/>
                            
                          </div>
                          <div className="title">
                            <h4>{item.title}</h4>
                          </div>
                          <div className="description">
                            <p>{item.text}</p>
                          </div>
                        </div>
                      </div>
                    )
                   
                  })
                }
               
                </div>
              </div>
            </div>
          </section>
           }
             

           
       
    </React.Fragment>
  )
}

export default Start

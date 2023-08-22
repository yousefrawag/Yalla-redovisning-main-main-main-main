import {FaPhone} from "react-icons/fa";
import {IoMdMail} from "react-icons/io";
import {BsFillSendFill} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import "./KONTAKT.scss";
import Fetchservic_contact from "../../component/KONTAKTdashboard"
import Loading from "../../component/loading/Loading";

const Kontakt = () => {
  const {data_contact , Loadding_contact} = Fetchservic_contact()
  // console.log(data_contact);
  if(Loadding_contact) {
    return <Loading />
  }
  return (
    <section className="contact">
              <div className="container">
            {
              data_contact.map((item) =>{
                return (
                  <div className="row" key={item.id}>
                  <div className="col-lg-6 col-12">
                    <div className="about">
                      <h4 className="name">{item.name}</h4>
                      <p className="title">{item.postion}</p>
                      {
                        item.imagecontrol ? <img src={item.img} alt="my-image" />:null
                      }
                      
                      <p className="description">{item.aboutMe}</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                               
           <section className="contact-section">
      <div className="container">
        <div className="parent-contact">
          <div className="row">
            <div className="col-12">
              <div className="serviecs-contact">
                <div className="icon">
                  <FaPhone/>
                </div>
                <div className="title">
                <a href={`tel:${item.phone}`}>{item.phone}</a>
                </div>
              </div>
            </div>
            <div className="col-12">
            <div className="serviecs-contact">
                <div className="icon">
                  <IoMdMail/>
                </div>
                <div className="title">
                <a href={`mailto:${item.email}`}>{item.email}</a>
                </div>
              </div>
            </div>
            <div className="col-12">
            <div className="serviecs-contact">
                <div className="icon">
                <BsFillSendFill/>
                </div>
                <div className="title">
                  <a href="#">{item.gjuterigatan}</a>
                </div>
              </div>
            </div>
          </div>
          <p className="about-time">{item.ppettide} <a href={`${item.facebooklink}`}> <BsFacebook/> </a> </p>
        </div>
      </div>
    </section>
                  </div>
                </div>
                )
              })
            }
                
              </div>
    </section>
  )
}

export default Kontakt

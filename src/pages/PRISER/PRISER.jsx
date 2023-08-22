import {BsCheckAll} from "react-icons/bs";
import "./PRISER.scss";
import Fetchservic_prsier from "../../component/Priserdashboard"
import Loading from "../../component/loading/Loading"
const Priser = () => {
 const {data_prsier , Loadding_prsier}  = Fetchservic_prsier()

  
  return (
    <section className="wrapper-priser">
          <div className="container">
            <div className="title-top"> <h3>priser</h3> </div>
            {
              Loadding_prsier? <Loading /> : <div className="priser-content">
              <div className="row">
              {
                data_prsier.map((item) => {
                  return (
                    <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                    <div className="content"><BsCheckAll/> <p>{item.tex}</p></div>
                    
                    </div>
                  )
                })
              }
                
                
                           
              </div>
            
            </div>
            }
           
            <div className="fasta-priser">
              <h3>fasta priser</h3>
              <p>Vi kan även erbjuda fasta månadspriser efter en överenskommelse.</p>
            </div>
          </div>
    </section>
  )
}

export default Priser

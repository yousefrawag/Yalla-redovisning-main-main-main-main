import {BsCheckAll} from "react-icons/bs";
import "./TJÄNSTER.scss";
import  Fetchservic_TJÄNSTER from "../../component/TJÄNSTERdashboard"
import Loading from "../../component/loading/Loading"

const TJÄNSTER = () => {
  const {data_TJÄNSTER , Loadding_TJÄNSTER}=  Fetchservic_TJÄNSTER()
  return (
    <section className="wrapper-single-services">
    <div className="container">
    {
      Loadding_TJÄNSTER ? <Loading />:<div className="parent-single-content">
      <div className="row">
            {
              data_TJÄNSTER.map((item) => {
                return (
                  <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                  <div className="serviecs-single-content">
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
    }
      
    </div>
  </section>
  )
}

export default TJÄNSTER

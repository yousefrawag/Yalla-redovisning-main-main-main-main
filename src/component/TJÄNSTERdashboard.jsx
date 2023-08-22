import { createClient } from 'contentful'
import { useState , useEffect } from 'react'
const client = createClient({
  space:"x2lr66pybp7k", 
  environment:"master",
  accessToken: "XK5GSNxwOO8D6atNcjcT60IAvKbCjxx4w7ZN8VwWLpA",

})
const Fetchservic_TJÄNSTER = () => {
    const [Loadding_TJÄNSTER , setloadings_TJÄNSTER] = useState(true)
    const [data_TJÄNSTER,setdata_TJÄNSTER] = useState([])
    const getdata = async() =>{
        try {
            const respones = await client.getEntries({content_type:"yallaRedovisningServiceTjnster"})
            setloadings_TJÄNSTER(false)
            const services = respones.items.map((item) => {
                const {title , text} = item.fields
                const id  = item.sys.id
                return {title, text , id}
            })
          
            setdata_TJÄNSTER(services)
        } catch (error) {
          
            setloadings_TJÄNSTER(true)
        }
       
    }
    useEffect(() => {
        getdata();
    } , [])
return {data_TJÄNSTER , Loadding_TJÄNSTER}
}
export default  Fetchservic_TJÄNSTER
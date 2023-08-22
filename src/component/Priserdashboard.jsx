import { createClient } from 'contentful'
import { useState , useEffect } from 'react'
const client = createClient({
  space:"x2lr66pybp7k", 
  environment:"master",
  accessToken: "XK5GSNxwOO8D6atNcjcT60IAvKbCjxx4w7ZN8VwWLpA",

})
const Fetchservic_prsier = () => {
    const [Loadding_prsier , setloadings_prsier] = useState(true)
    const [data_prsier,setdata_prsier] = useState([])
    const getdata = async() =>{
        try {
            const respones = await client.getEntries({content_type:"yallaRedovisningPriser"})
            setloadings_prsier(false)
            console.log(respones.items);
            const services = respones.items.map((item) => {
                const {tex} = item.fields
                const id  = item.sys.id
                
                return {tex,id}
            })
          
            setdata_prsier(services)
        } catch (error) {
          
            setloadings_prsier(false)
        }
       
    }
    useEffect(() => {
        getdata();
    } , [])
return {data_prsier , Loadding_prsier}
}
export default  Fetchservic_prsier
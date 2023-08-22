import { createClient } from 'contentful'
import { useState , useEffect } from 'react'
const client = createClient({
  space:"x2lr66pybp7k", 
  environment:"master",
  accessToken: "XK5GSNxwOO8D6atNcjcT60IAvKbCjxx4w7ZN8VwWLpA",

})
const Fetchservic_start = () => {
    const [Loadding_start , setloadings_start] = useState(true)
    const [data_start,setdata_start] = useState([])
    const getdata = async() =>{
        try {
            const respones = await client.getEntries({content_type:"yallaRedovisningService"})
            setloadings_start(false)
            const services = respones.items.map((item) => {
                const {title , text} = item.fields
                const id  = item.sys.id
                return {title, text , id}
            })
          
            setdata_start(services)
        } catch (error) {
          
            setloadings_start(true)
        }
       
    }
    useEffect(() => {
        getdata();
    } , [])
return {data_start , Loadding_start}
}
export default  Fetchservic_start
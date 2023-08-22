import { createClient } from 'contentful'
import { useState , useEffect } from 'react'
const client = createClient({
  space:"x2lr66pybp7k", 
  environment:"master",
  accessToken: "XK5GSNxwOO8D6atNcjcT60IAvKbCjxx4w7ZN8VwWLpA",

})
const Fetchservic_logo = () => {
    const [Loadding_logo , setloadings_logo] = useState(true)
    const [data_logo,setdata_logo] = useState({})
    const getdata = async() =>{
        try {
            const respones = await client.getEntries({content_type:"yallaRedovisningLogo"})
            setloadings_logo(false)
          
            const services = respones.items.map((item) => {
                const { logo} = item.fields
                const id  = item.sys.id
                const img = logo?.fields?.file?.url
                return {img,id}
            })
          
            setdata_logo(services)
        } catch (error) {
          
            setloadings_logo(false)
        }
       
    }
    useEffect(() => {
        getdata();
    } , [])
return {data_logo , Loadding_logo}
}
export default Fetchservic_logo
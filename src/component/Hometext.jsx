import { createClient } from 'contentful'
import { useState , useEffect } from 'react'
const client = createClient({
  space:"x2lr66pybp7k", 
  environment:"master",
  accessToken: "XK5GSNxwOO8D6atNcjcT60IAvKbCjxx4w7ZN8VwWLpA",

})
const Fetchservic_hometext = () => {
    const [Loadding_hometext , setloadings_hometext] = useState(true)
    const [data_hometext,setdata_hometext] = useState([])
    const getdata = async() =>{
        try {
            const respones = await client.getEntries({content_type:"vinstredovisningHomeheader"})
            setloadings_hometext(false)
            const services = respones.items.map((item) => {
                const {title , text} = item.fields
                const id  = item.sys.id
                return {title, text , id}
            })
          
            setdata_hometext(services)
        } catch (error) {
          
            setloadings_hometext(true)
        }
       
    }
    useEffect(() => {
        getdata();
    } , [])
return {data_hometext , Loadding_hometext}
}
export default  Fetchservic_hometext
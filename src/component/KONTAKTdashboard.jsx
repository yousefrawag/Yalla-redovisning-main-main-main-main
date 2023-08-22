import { createClient } from 'contentful'
import { useState , useEffect } from 'react'
const client = createClient({
  space:"x2lr66pybp7k", 
  environment:"master",
  accessToken: "XK5GSNxwOO8D6atNcjcT60IAvKbCjxx4w7ZN8VwWLpA",

})
const Fetchservic_contact = () => {
    const [Loadding_contact , setloadings_contact] = useState(true)
    const [data_contact,setdata_contact] = useState([])
    const getdata = async() =>{
        try {
            const respones = await client.getEntries({content_type:"yallaRedovisningContact"})
            setloadings_contact(false)
           
            const services = respones.items.map((item) => {
                const { facebooklink,imagecontrol,phone,email ,gjuterigatan,ppettide,name,postion,image,aboutMe} = item.fields
                const id  = item.sys.id
                const img = image?.fields?.file?.url
                return {facebooklink,imagecontrol ,phone,email ,gjuterigatan,ppettide, name,postion,img,aboutMe,id}
            })
          
            setdata_contact(services)
        } catch (error) {
          
            setloadings_contact(false)
        }
       
    }
    useEffect(() => {
        getdata();
    } , [])
return {data_contact , Loadding_contact}
}
export default  Fetchservic_contact
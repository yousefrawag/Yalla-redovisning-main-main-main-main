import React from 'react'
import './App.css'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import {Kontakt , Priser ,Start , TJÄNSTER} from "./pages/index.js"
import Layout from "./Layout.jsx"

function App() {
const Router = createBrowserRouter([
    {
    path:"/",
    element:<Layout />,
    children: [
      {
        path:"/",
        index:true,
        element:<Start />
      },
      
      {
        path:"/TJÄNSTER",
        element:<TJÄNSTER />
  
      },
      {
        path:"/Priser",
        element:<Priser />
      },
      {
        path:"/Kontakt",
        element:<Kontakt />
      }
    ]
    
  },
])

  return (
    <React.Fragment>
        <RouterProvider router={Router} />
    </React.Fragment>
  )
}

export default App

import {Route, Routes } from "react-router-dom"
// import Home from "./pages/homePage/Home"
import Service from "./pages/servicePage/Service"
import Resume from "./pages/resumePage/Resume"
// import Work from "./pages/workPAge/Work"
import Work from "./pages/workPAge/Work"
import Contact from "./pages/contactPage/Contact"
import Home from "./pages/homePage/Home"
import Layout from "./pages/Layout"





function App() {


  return (
    <>
    
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/services" element={<Service/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
        </Route>
      </Routes>

    
      
    </>
  )
}

export default App

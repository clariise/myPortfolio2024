import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Project from "./pages/Project.jsx";
import Experience from "./pages/Experience.jsx";
import Layout from "./pages/Layout.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {

//BR--indicate everything in children can be accesssible by route
//Routes --link of a websites /home, /about
//in the route ano yung ,ahing path nya --under ELEMENT-- NEED PASS ng component na mag rerender
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path ="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about"element={<About/>}/>
      </Route>
  
    </Routes>
    </BrowserRouter>
  )
  }



export default App

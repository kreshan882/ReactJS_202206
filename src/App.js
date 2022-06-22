import React  from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";

import HitachiModuleK from './comp/pages/nameList/HitachiModuleK';
import HeaderBar from './comp/pages/headerBar/HeaderBar';
import Home from './comp/pages/Home/Home';
import About from './comp/pages/About/About';



function App() {
  return (
    //  <React.Fragment >
    //     <HeaderBar />
    //     <Home /> 
    //     <About />
    //     <HitachiModuleK />
         
    //   </React.Fragment >
    <React.Fragment>
    <BrowserRouter>
    <HeaderBar />
    <Routes>
      <Route path="/" element={<HitachiModuleK />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
    </BrowserRouter>
  </React.Fragment>



//     // <React.Fragment>
//     //   <BrowserRouter>
//     //     <Route path="/a"><About /></Route>
//     //   </BrowserRouter> 
//     //  </React.Fragment>
    
  );
}

export default App;

import logo from './logo.svg';

import './App.css';
import React from 'react';
import Home_Task from './Task/Home_Task';
//import Count from './Count';
//import GetData from './GetData';

// import Header from './Header';
// import ArrowFunction from './ArrowFunction';
// import ObjectEx from './ObjectEx';
// import Project from './Project';
// import Task from './Task';
// import Accordion from './Accordion';
// import ModalBox from './ModalBox';
// import Spread from './Spread';

/*import Acc2 from './Acc2';
import React from 'react';
*/
//import './App.css';

/*import ErrorHandling from './ErrorHandling';
import Product from './Product';
import Home from './Home';
import About_Task from './Task/About_Task';
import Accordion_Task from './Task/Accordion_Task';
import Contact_Task from './Task/Contact_Task';
import Login_Task from './Task/Login_Task';
import Projects_Task from './Task/Projects_Task';
import Skills_Task from './Task/Skills_Task';

import adidasImg from './adidas shoe.jpg';
import pumaImg from './puma shoe.jpg';
import nikeImg from './nike shoe.avif';
import socks1Img from './socks1.jpg';
import socks2Img from './socks2.jpg';
import socks3Img from './socks3.jpg'

import { 
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home_Task from './Task/Home_Task';*/



//function App() {
 /* const obj = {
    name: "Dhivya",
    email: "dhivya@example.com",
    mobile: "9876543210",
  };

  const productObj = [
    {
      name: "Adidas",
      price: "3000",
      strikePrice: "5000",
      image: adidasImg,
    },
    {
      name: "Puma",
      price: "2500",
      strikePrice: "3500",
      image: pumaImg,
    },
    {
      name: "Nike",
      price: "4000",
      strikePrice: "6000",
      image: nikeImg,
    },
  ];

  const productSOCK = [
    {
      name: "FRIDO Socks",
      price: "300",
      strikePrice: "500",
      image:socks1Img,
    },
    {
      name: "HRX Socks",
      price: "250",
      strikePrice: "350",
      image: socks2Img,
    },
    {
      name:"HEELIUM Socks",
      price: "400",
      strikePrice: "500",
      image: socks3Img,
    },
  ];*/

  //return (
    {/*<BrowserRouter >
      <nav >

        <Link to="/">Home | </Link>{" "}
        <Link to="/product">Product | </Link>{" "}
        <Link to="/socks">Socks | </Link>{" "}
        <Link to="/admission">Admission Enquiry |</Link>{" "}
        <Link to="/About_Task">About |</Link>{" "}
        <Link to="/Accordion_Task">Accordion |</Link>{" "}
        <Link to="/Contact_Task">Contact |</Link>{" "}
        <Link to="/Home_Task">Home |</Link>{" "}
        <Link to="/Login_Task">Login |</Link>{" "}
        <Link to="Projects_Task">Projects |</Link>{" "}
        <Link to="/Skills_Task">Skills </Link>{" "}
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
         <Route
          path="/About"
          element={<About_Task />}
        />
         <Route
          path="/Accordion"
          element={<Accordion_Task />}
        />
         <Route
          path="/Contact"
          element={<Contact_Task />}
        />
         <Route
          path="/Home"
          element={<Home_Task />}
        />
         <Route
          path="/Login"
          element={<Login_Task />}
        />
         <Route
          path="/Projects"
          element={<Projects_Task />}
        />
         <Route
          path="/Skills"
          element={<Skills_Task />}
        />

        <Route
          path="/product"
          element={<Product productObj={productObj} />}
        />

        <Route
          path="/socks"
          element={<Product productObj={productSOCK} />}
        />

        <Route
          path="/admission"
          element={<ErrorHandling data={obj} />}
        />
      </Routes>
    </BrowserRouter>*/}
  
    
 /* );
}*/
function App(){
  return(
    <div>
     
     {/* <Count/>*/}
     {/*<GetData/>*/}
     <Home_Task />
    </div>
  );
}
export default App;


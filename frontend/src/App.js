import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import MyLogin from './components/MyLogin';
import MyUserRegister from './components/MyUserRegister';
import MyTraderRegister from './components/MyTraderRegister';
import MyAddProduct from './components/MyAddProduct';
import MyAbout from './components/MyAbout';
import MyFooter from './components/Footer';
import CGV from './components/CGV';
import CGU from './components/CGU';
import MyHome from './components/MyHome';



const App = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/Contact', label: 'Contact' },
    { path: '/UserRegister', label: 'UserRegister' },
    { path: '/TraderRegister', label: 'TraderRegister' },
    { path: '/Login', label: 'Login' },
    { path: '/AddProduct', label: 'AddProduct' }
  ];

  const footerItems = [
    { path: '/Contact', label: 'Contact' },
    { path: '/About', label: 'About' },
    { path: '/CGV', label: 'CGV' },
    { path: '/CGU', label: 'CGU' }
  ];

  return (
    <Router>
      <NavBar brandName="LeProjetLocalTest" navItems={navItems} />
      <main>
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<MyLogin />} />
        <Route path="/UserRegister" element={<MyUserRegister />} />
        <Route path="/TraderRegister" element={<MyTraderRegister />} />
        <Route path="/AddProduct" element={<MyAddProduct />} />
        <Route path="/About" element={<MyAbout />} />
        <Route path="/CGV" element={<CGV />} />
        <Route path="/CGU" element={<CGU />} />
      </Routes>
      </main>
      <MyFooter navItems={footerItems} />
    </Router>
  );
};

export default App;
import './App.css';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import NavBar from './components/NavBar';


const App = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/MovieList', label: 'Movies' },
    { path: '/Contact', label: 'Contact' },
    { path: '/About', label: 'About' },
	{ path: '/RegisterUser', label: 'RegisterUser'},
  { path: '/RegisterTrader', label: 'RegisterTrader'},
	{ path: '/LoginUser', label: 'LoginUser'},
  { path: '/Contact', label: 'Contact' },
  { path: '/LoginTrader', label: 'LoginTrader'}
  ];
  return (
    <Router>
      <NavBar brandName="LeProjetLocalTest" navItems={navItems}/> 

    </Router>
  );
};

export default App;

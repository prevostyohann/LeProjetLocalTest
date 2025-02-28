import React from 'react';
import { NavLink } from 'react-router-dom';
import MyImage from '../Images/LogoPanier.jpg';

const MyFooter = ({ navItems }) => {
  return (
    <footer>
        <h2> My Footer </h2>
      <nav>
      
        <ul>
        <img src={MyImage} alt="Logo le panier local dans le footer" height={75} width={100} />
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default MyFooter;
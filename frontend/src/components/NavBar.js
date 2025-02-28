import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import MyImage from '../Images/lePanier.png';

/* const chemin = '/';
const NomButton = 'Déconnexion'; */

const NavBar = ({ brandName, navItems, searchValue, setSearchValue, isLoggedIn, setIsLoggedIn }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            
            {/* <button onClick={toggleMenu}>
                ☰
            </button> */}
            <div>
<img src={MyImage} alt="Logo le panier local dans la navbar" height={75} width={100}/>
                {navItems.map((item, index) => {
                    
                    return (
                        <NavLink 
                            key={index} 
                            to={item.path} 
                        >
                            {item.label}
                        </NavLink>
                    );
                })}
                    
                   
                
            </div>
            
        </nav>
    );
};

NavBar.propTypes = {
  
    brandName: PropTypes.string.isRequired,
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    searchValue: PropTypes.string.isRequired,
    setSearchValue: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    setIsLoggedIn: PropTypes.func.isRequired,
};

export default NavBar;
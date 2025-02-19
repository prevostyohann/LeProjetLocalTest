import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/* const chemin = '/';
const NomButton = 'Déconnexion'; */

const NavBar = ({ brandName, navItems, searchValue, setSearchValue, isLoggedIn, setIsLoggedIn }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="text-xl font-bold">{brandName}</div>
            <button className="cursor-pointer md:hidden text-2xl" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`flex-col md:flex md:flex-row ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
                {navItems.map((item, index) => {
                    if (item.label === 'Movies' && !isLoggedIn) return null;
                    if (item.label === 'RegisterUser' && isLoggedIn) return null;
                    if (item.label === 'RegisterTrader' && isLoggedIn) return null;
                    if (item.label === 'LoginUser' && isLoggedIn) return null;
                    return (
                        <NavLink 
                            key={index} 
                            to={item.path} 
                            className="px-4 py-2 hover:bg-gray-700 rounded"
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
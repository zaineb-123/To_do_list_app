  import React from 'react';
  import Dropdown from './Dropdown';
  import { BiSun, BiMoon } from 'react-icons/bi';
  import { BiSearch } from 'react-icons/bi';

  const NavBar = ({ searchTerm, setSearchTerm, filter, setFilter, isDark, setIsDark }) => {
    return (
      <div className='header_container'>
        <div>
          <h1 className="title">TODO LIST</h1>
        </div>
        <div className='nav_bar'>
          <BiSearch className='icon'size={21} />
          <input 
            autoFocus
            type='text' 
            placeholder=' Search note...' 
            className="input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <Dropdown value={filter} onChange={setFilter} />
          <button 
            className='all theme-toggle' 
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? (
            <BiSun  /> 
        ) : (
            <BiMoon  /> 
        )}
            
          </button>
        </div>
      </div>
    );
  };

  export default NavBar;
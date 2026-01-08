import React, { useState } from 'react'

const Dropdown=({value,onChange})=>{
    const[isOpen,setIsOpen]=useState(false);
    const options=[
        {label:"ALL" ,value : "all"},
        {label:"COMPLETE" ,value : "complete"},
        {label:"INCOMPLETE" ,value : "incomplete"},
    ]
    const handleSelect =(optionValue)=>{
        onChange(optionValue);
        setIsOpen(false);
    }
      const currentLabel = options.find(opt => opt.value === value)?.label || "ALL";
  return (
    <div className="dropdown-container">
      <button 
        className="all dropdown-toggle" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentLabel} 
        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map(option => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`dropdown-item ${value === option.value ? 'active' : ''}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

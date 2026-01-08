  import React from "react";

  const New = ({ isOpen, onClose, onAdd, inputRef }) => {
    if (!isOpen) return null;

    const handleAdd = () => {
      onAdd();
    };

    return (
      <div className="popup" onClick={onClose}>
        <div className="popup-card" onClick={(e) => e.stopPropagation()}>
          <h2 className="popup-title">New Note</h2>
          <input 
            autoFocus
            type="text" 
            placeholder="Input your note..." 
            ref={inputRef} 
            className='input_text'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAdd();
              }
            }}
          />
          
          <div className="popup_action">
            <button className="cancel" onClick={onClose}>CANCEL</button>
            <button className="ajouter" onClick={handleAdd}>APPLY</button>
          </div>
        </div>
      </div>
    );
  };

  export default New;
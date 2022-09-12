import React from "react";
import "./Popup.css"

export const IngredientPopup = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button onClick={() => props.setTrigger(false)} className="close-btn">X</button>
                { props.children }
            </div>
        </div>
    ) : ""; 
}
import React, { useState } from "react";

const ColorButton = () => {

    const [buttonColor, setButtonColor] = useState("red")
    const newButtonColor = buttonColor === "red" ? "blue" : "red";
     
    return (
        <div>
            <button 
                className="ui button"
                style={{backgroundColor: buttonColor}}
                onClick={() => setButtonColor(newButtonColor)}>
                Change to {newButtonColor}
            </button>
        </div>
    )
}

export default ColorButton;
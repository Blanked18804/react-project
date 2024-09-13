import React, { useState } from 'react';

function ToggleBtn({active}){

    const [isActive, setIsActive] = useState(active);

    const toggleBtnClicked = () => {
        isActive ? setIsActive(!isActive) : setIsActive(!isActive)
    }

    return(
        <button className={`toggle-btn ${isActive ? `active` : `disabled`}`} onClick={toggleBtnClicked}></button>
    )

}

export default ToggleBtn;
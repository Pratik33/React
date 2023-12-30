import { useState } from "react";

const NavBar = ({themeHandler, theme}) => {

  
    const clickHandler = () =>{
        themeHandler(!theme)
    }

    return (
    <ul>
        <li>
            Home
        </li>
        <li>
            <button onClick={clickHandler}>Change theme</button>
        </li>
    </ul>
    )

    
}


export default NavBar;
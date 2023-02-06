import React from "react";
import "../../css/header/Header.css"
import { words } from "../../words";
const Header =()=>{
    return(
        <header className="text-center bg-secondary text-white py-2">
        <h2 className="fw-bolder ">{words.headerTitle}</h2>
      </header>
    )
}

export default Header;
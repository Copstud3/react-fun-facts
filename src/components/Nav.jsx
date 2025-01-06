import React from "react";
import reactIcon from "/src/assets/react.svg"

export default function Nav() {
    return(
        <nav className="nav">
            <img src={reactIcon} alt="react"  className="nav--img"/>
            <h1 className="nav--text">ReactFacts</h1>
        </nav>
    )
}
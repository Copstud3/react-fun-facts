import React from "react";
import reactIcon from "/src/assets/react.svg"

export default function Main(){
    return(
        <main>
            <h1 className="main-text">Fun facts about React</h1>
            <ul className="main-list">
               <li>Developed by Jordan Walke at Facebook in 2011.</li>
                <li>Uses a virtual DOM for efficient updates and rendering.</li>
                <li>Utilizes JSX, a syntax extension combining JavaScript and HTML.</li>
                <li>Utilizes JSX, a syntax extension combining JavaScript and HTML.</li>
                <li>React's principles can be applied to mobile app development with React Native.</li>
            </ul>
        </main>
    )
}
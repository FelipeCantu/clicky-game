import React from 'react';
import './header.css';


const Header = props => (
    <div className="header">
        <div className="title">{props.children}</div>
        {/* <h2>Click An Image</h2> */}
        <div className="scores">
            Score: {props.score} | Highscore: {props.highscore}
        </div>
    </div>
);

export default Header;
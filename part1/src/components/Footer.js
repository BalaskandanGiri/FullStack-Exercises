import React from 'react';

const Footer = (props) => {

    return (
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    );
};



export default Footer;
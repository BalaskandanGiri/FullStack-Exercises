import React from "react";

type footer = {
    name: string,
    exerciseCount: number
}
const Footer = ({props}: {props: footer[]}) => {
    // eslint-disable-next-line react/prop-types
    return <p>Number of exercises {props.reduce((carry, part) => carry + part.exerciseCount, 0)}</p>

}

export default Footer;
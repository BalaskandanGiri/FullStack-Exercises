import React from "react";

type coursePart =  {
    name: string,
    exerciseCount: number
}

const Body = ({courseParts}: {courseParts: coursePart[]}) => {
    const res = courseParts.map(x => <p key={x.name}>{x.name}{x.exerciseCount}</p>)
    return <>{res}</>;
}

export default Body;
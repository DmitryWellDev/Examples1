import React from "react";
import HOC from "./HOC";

type PropsType = {
    increaseCount: () => void
    count: number
}

const H = (props: PropsType) => {
    return (
        <div>
            <div onMouseOver={props.increaseCount}>Hover Me {props.count}</div>
        </div>
    )
}

export default HOC(H)
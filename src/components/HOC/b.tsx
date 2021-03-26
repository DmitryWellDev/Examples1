import React from "react";
import HOC from "./HOC";

type PropsType = {
    increaseCount: () => void
    count: number
}

const B = (props: PropsType) => {
    return (
        <div>
            <button onClick={props.increaseCount}>Click Me {props.count}</button>
        </div>
    )
}

export default HOC(B)
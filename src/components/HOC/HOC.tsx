import React, {useState} from "react";

const HOC = (SomeComponent: any) => {

    const NewComp = () => {
        let [count, setCount] = useState(0)
        const increaseCount = () => {
            setCount(prev => prev+1)
        }
        return <SomeComponent count={count} increaseCount={increaseCount}/>
    }
    return NewComp
}

export default HOC
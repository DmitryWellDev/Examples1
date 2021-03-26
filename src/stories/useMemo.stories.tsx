import React, {useState} from 'react'


export default {
    title: 'useMemo stories',
}

export const useMemoExample = () => {

    const [A, setA] = useState<number>(5)
    const [B, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    for (let i = 1; i <= A; i++) {
        resultA = resultA * i
    }
    for (let i = 1; i <= B; i++) {
        resultB = resultB * i
    }


    return (
        <div>
            <input value={A}  onChange={(e) => {
                setA(Number(e.currentTarget.value))
            }}/>
            <input value={B}  onChange={(e) => {
                setB(Number(e.currentTarget.value))
            }}/>
            <div>
                Result A: {resultA}
                Result B: {resultB}
            </div>
        </div>
    )
}
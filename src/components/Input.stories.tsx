import React, {useState, useRef, ChangeEvent} from 'react'

export default {
    title: 'input'
}

export const GettingValueByUseState = () => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <><input onChange={onChange}/> -{value}</>
}
//==================================================================
export const GettingValueById = () => {
    const [value, setValue] = useState('')

    const onClick = () => {
        const el = document.getElementById('inputId') as HTMLInputElement
        setValue(el.value)
    }

    return <><input id={'inputId'}/>
        <button onClick={onClick}>Save</button>
        -{value}</>
}
//===================================================================
export const GettingValueByRef = () => {
    const [value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const onClick = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={onClick}>Save</button>
        -{value}</>
}
//====================================================================
export const ControledInput = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [parientValue, setParientValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParientValue(e.currentTarget.value)
    }

    return <input value={parientValue} onChange={onChange}/>
}

export const ControledCheckbox = () => {
    const [checkedBox, setCheckedBox] = useState(false)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckedBox(e.currentTarget.checked)
    }

    return <input type='checkbox' checked={checkedBox} onChange={onChange}/>
}

export const ControledSelect = () => {
    const [chosedItem, setChosedItem] = useState<string | undefined>(undefined)

const onChange = (e: ChangeEvent<HTMLSelectElement>) => {setChosedItem(e.currentTarget.value)}

    return <select value={chosedItem} onChange={onChange}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moskow</option>
        <option value="3">Kiev</option>
    </select>
}
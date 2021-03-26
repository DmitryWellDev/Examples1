import React, {useState} from 'react'
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select stories'
}

const onChange = action('Select want to be changed')
const closeMenu = action('Have to close')

export const OpenedSelect = () => <Select value={'Menu'} onChange={onChange} items={[
    {title: 'New York', itemValue: 1},
    {title: 'Chicago', itemValue: 2},
    {title: 'Washington', itemValue: 3},
    {title: 'Muami', itemValue: 4},
]}/>
export const SelectChanging = () => {

    const items = [
        {title: 'New York', itemValue: 1},
        {title: 'Chicago', itemValue: 2},
        {title: 'Washington', itemValue: 3},
        {title: 'Muami', itemValue: 4},
    ]

    const [changeTitle, setChangeTitle] = useState('Menu')

    const onChange = (value:any) => {
        items.map(i => {
            if (i.itemValue === value) {
                setChangeTitle(i.title)
            }
        })
    }

    return <Select value={changeTitle} onChange={onChange} items={items}/>
}

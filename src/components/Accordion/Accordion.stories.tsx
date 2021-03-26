import React, {useState} from 'react'
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion stories',
    component: React
}

let callbeck = action('clicked Menu')
let onClick = action('item was clicked')

export const openMenu = () => <Accordion title={'Menu'} collapsed={true} setCollapsed={callbeck} items={[]} onItemClick={onClick} />
export const closeMenu = () => <Accordion title={'Menu'} collapsed={false} setCollapsed={callbeck} onItemClick={onClick} items={[
    {name: 'Aleksy', value: 1},
    {name: 'Sergey', value: 2},
    {name: 'Vlad', value: 3},
    {name: 'Krab', value: 4}
]}/>
export const changingMenu = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [collapsed, setCollapsed] = useState<boolean>(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newTitle, setNewTitle] = useState('Menu')

    const items = [
        {name: 'Aleksy', value: 1},
        {name: 'Sergey', value: 2},
        {name: 'Vlad', value: 3},
        {name: 'Krab', value: 4}
        ]

    const changeName = (value: number) => {
        items.map((i) => {
            if(i.value === value) {
                setNewTitle(i.name)
                setCollapsed(false)
            }
        })
    }

    return <Accordion title={newTitle} collapsed={collapsed} setCollapsed={() => {
        setCollapsed(!collapsed)
    }} onItemClick={changeName}  items={items}/>
}

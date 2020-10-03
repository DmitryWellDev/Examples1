import React, {useState} from 'react'
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion stories',
    component: React
}

let callbeck = action('clicked Menu')

export const openMenu = () => <Accordion title={'Menu'} collapsed={true} setCollapsed={callbeck}/>
export const closeMenu = () => <Accordion title={'Menu'} collapsed={false} setCollapsed={callbeck}/>
export const changingMenu = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
   const [collapsed, setCollapsed] = useState<boolean>(false)

    return <Accordion title={'Menu'} collapsed={collapsed} setCollapsed={()=> {setCollapsed(!collapsed)}}/>
}

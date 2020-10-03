import React, {useState} from 'react'
import ControledOnOff from "./ControledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'ControledOnOff stories',
    component: ControledOnOff
}

const callback = action('button was clicked')

export const offMode = () => <ControledOnOff on={false} onChange={callback}/>
export const onMode = () => <ControledOnOff on={true} onChange={callback}/>
export const changeMode = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [on, setOn] = useState(false)
    return <ControledOnOff on={on} onChange={setOn}/>
}
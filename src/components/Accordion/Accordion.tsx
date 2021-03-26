import React, {useState} from "react";
import AccordionTitle from "../AccordionTitle/AccordionTitle";
import AccordionBody from "../AccordionBody/AccordionBody";

export type ItemsType = {
    name: string
    value: any
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed:() => void
    items: Array<ItemsType>
    onItemClick: (value: any) => void
}

const Accordion = React.memo((props:AccordionPropsType) => {

    return(
        <div>
            <AccordionTitle title={props.title} setCollapsed={props.setCollapsed} />
            {props.collapsed && <AccordionBody items={props.items} onItemClick={props.onItemClick}/>}
        </div>
    )
})

export default Accordion
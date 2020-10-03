import React from "react";

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
    // collapsed: boolean
}

function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={(e) => {props.setCollapsed()}}>{props.title}</h3>
        </div>
    )
}

export default AccordionTitle
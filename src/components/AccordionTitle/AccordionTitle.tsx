import React from "react";

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
    // collapsed: boolean
}

const AccordionTitle = React.memo((props:AccordionTitlePropsType) => {
    return (
        <div>
            <h3 onClick={(e) => {props.setCollapsed()}}>{props.title}</h3>
        </div>
    )
})

export default AccordionTitle
import React from "react";
import styles from './AccordionBody.module.css'
import {ItemsType} from "../Accordion/Accordion";

type AccordionBodyType = {
     items: ItemsType[]
     onItemClick: (value: any) => void
}

const AccordionBody = React.memo((props: AccordionBodyType) => {

    const activateViewMide = () => {

    }

    return (
        <div>
            <ul className={styles.list}>
                {props.items.map((i,index) => <li key={index} onClick={()=> {props.onItemClick(i.value)}}>{i.name}</li>)}
            </ul>
        </div>
    )
})

export default AccordionBody
import React from "react";
import styles from './AccordionBody.module.css'
import {ItemsType} from "../Accordion/Accordion";

type AccordionBodyType = {
    // items: ItemsType[]
    // onItemClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <div>
            <ul className={styles.list}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                {/*{props.items.map((i, index) => <li onClick={()=>{props.onItemClick(i.name)}} key={index}>{i.name}</li>)}*/}
            </ul>
        </div>
    )
}

export default AccordionBody
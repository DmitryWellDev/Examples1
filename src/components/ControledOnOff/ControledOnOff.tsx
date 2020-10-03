import React, {useState} from "react";
import styles from './ControledOnOff.module.css'

type ControledOnOff = {
    on: boolean
    onChange: (on: boolean) => void
}

function ControledOnOff(props:ControledOnOff) {

return(
    <div className={styles.wrap}>
        <div className={props.on ? `${styles.on} ${styles.onColor}`: styles.on} onClick={() => {props.onChange(true)}}><span>On</span></div>
        <div className={props.on ? styles.off : `${styles.off} ${styles.offColor}`} onClick={() => {props.onChange(false)}}>Off</div>
        <div className={props.on ? styles.circle : styles.circleOff}></div>
    </div>
)
}

export default ControledOnOff
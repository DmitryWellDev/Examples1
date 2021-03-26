import React, {useState, KeyboardEvent} from 'react'
import styles from './Select.module.css'


type ItemType = {
    title: string
    itemValue: number
}

type SelectPropsType = {
    value: string
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = React.memo((props: SelectPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [selectedItem, setSelectedItem] = useState(props.value)

    //props.items.find(i => i.title === selectedItem)

    const disactivateMode = () => setEditMode(!editMode)

    const onItemClick = (iValue: number, iTitle: string) => {
        disactivateMode()
        props.onChange(iValue)
    }

     const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for(let i=0; i<props.items.length; i++) {
            if (props.items[i].title === selectedItem) {
                setSelectedItem(props.items[i++].title)
                break
            }
        }
     }

    return (<div onKeyUp={onKeyUp} className={styles.main}>
        <div className={styles.listHeader} onClick={disactivateMode}>{props.value}</div>
        {editMode
        &&
        <div className={styles.list}>
            {props.items.map(i => <div
                key={i.itemValue}
                onMouseEnter={() => {
                    setSelectedItem(i.title)
                }}
                className={selectedItem === i.title ? styles.selected : ''}
                onClick={() => {
                    onItemClick(i.itemValue, i.title)
                }}>{i.title}</div>)}
        </div>}
    </div>)
})




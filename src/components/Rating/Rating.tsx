 import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5


type RatingPropsType = {
    value: RatingValueType
    setRatingvalue: (value: RatingValueType) => void
}

const Rating = React.memo((props: RatingPropsType) => {



    return (
        <div>
            <Star selected={props.value > 0} value={1} setRatingvalue={props.setRatingvalue}/>
            <Star selected={props.value > 1} value={2} setRatingvalue={props.setRatingvalue}/>
            <Star selected={props.value > 2} value={3} setRatingvalue={props.setRatingvalue}/>
            <Star selected={props.value > 3} value={4} setRatingvalue={props.setRatingvalue}/>
            <Star selected={props.value > 4} value={5} setRatingvalue={props.setRatingvalue}/>
        </div>
    )
})

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    setRatingvalue: (value: RatingValueType) => void
}

const Star = React.memo((props: StarPropsType) => {

    return <span onClick={() => {props.setRatingvalue(props.value)}}>{props.selected ? <b>Star </b> : 'Star'}</span>
})


 //first commit
 //second commit
export default Rating
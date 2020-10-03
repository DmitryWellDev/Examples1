import React, {useState} from 'react'
import Rating, {RatingValueType} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating
}

export const EmptyStar = () => <Rating value={0} setRatingvalue={x=>x}/>
export const Star1 = () => <Rating value={1} setRatingvalue={x=>x}/>
export const Star2 = () => <Rating value={2} setRatingvalue={x=>x}/>
export const Star3 = () => <Rating value={3} setRatingvalue={x=>x}/>
export const Star4 = () => <Rating value={4} setRatingvalue={x=>x}/>
export const Star5 = () => <Rating value={5} setRatingvalue={x=>x}/>
export const changeRating = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [rating, SetRating] = useState<RatingValueType>(0)

    return <Rating value={rating} setRatingvalue={SetRating}/>
}
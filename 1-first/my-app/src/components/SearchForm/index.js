import React from "react";
import { useLocation } from "wouter"
import useForm from "./hook";

const RATINGS = ["g", "pg", "pg-13", "r"]

function SearchForm({initialKeyword = '', initialRating = RATINGS[0]}){
    const [path, refreshPath] = useLocation()
    const {keyword, rating, changeKeyword, changeRating} = useForm({ initialKeyword, initialRating })

    const submitKeyword = (e) =>{
        e.preventDefault()
        refreshPath(`/search/${keyword}`)
    }

    const changeInput = (e) =>{
        changeKeyword({ keyword: e.target.value })
    }

    const handleChangeRating = (evt) => {
        changeRating({ rating: evt.target.value })
    }

    return(
        <form onSubmit={submitKeyword}>
            <select className="select__input" onChange={handleChangeRating}>
                <option disabled>
                    Rating:
                </option>
                {RATINGS.map((rating) => (
                    <option key={rating}>{rating}</option>
                ))}
            </select>
            <input className="form__input" placeholder="Search for GIF..." onChange={changeInput} type={'text'} value={keyword}/>
            <button className="form__btn">Search</button>
        </form>
    )
}

export default React.memo(SearchForm)
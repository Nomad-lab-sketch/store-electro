import React from "react";
import s from "../css/header_filter.module.css";

export const FilterMenu = (props) => {

    if(props.editMode === true) {
        return(
            <div className={s.searchContainer__filter__block}>
                <select className={s.searchContainer__filter__block__list}>
                    <option>Category01</option>
                    <option>Category02</option>
                    <option>Category03</option>
                    <option>Category04</option>
                </select>
            </div>
        )
    } if(props.editMode === false){
        return null
    }
}
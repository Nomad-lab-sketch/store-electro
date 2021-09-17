import React, {useRef, useState} from "react";
import s from "./css/header_search.module.css"
import {FiSearch, IoMdClose} from "react-icons/all";
import {useOutsideClick} from "rooks";


export const Search = (props) => {


    let [editModeFilter, setEditModeFilter] = useState(false)
    let [editModeSearch, setEditModeSearch] = useState(false)

    let filterOff = () => {
        setEditModeFilter(false)
    }

    let filterOn = () => {
        setEditModeFilter(true)
    }

    const ref = useRef()
    useOutsideClick(ref, filterOff);


    let searchTouchOn = () => {
        setEditModeSearch(true)
    }

    let searchTouchOff = () => {
        setEditModeSearch(false)
    }

    return (
        <form>
            <div className={s.searchContainer} >
                <select
                    className={editModeFilter ? s.searchContainer__filter + " " + s.active__filter : s.searchContainer__filter}
                    onClick={() => {
                        if (editModeFilter === false) {
                            filterOn()
                        } else {
                            filterOff()
                        }
                    }} ref={ref}>
                    <option value={0}>All</option>
                    <option value={1}>Laptops</option>
                    <option value={2}>Phone</option>
                    <option value={3}>Headphones</option>
                    <option value={4}>Сamera</option>
                    All Categories
                </select>
                <input placeholder="Search here"/>
                <button className={s.searchContainer__button}>Search</button>
            </div>
            <div className={editModeSearch ? s.searchContainer__loop + " " + s.active__search : s.searchContainer__loop}
                 onClick={() => {
                     if(editModeSearch === false){
                             searchTouchOn()
                     }

                 }}>
                <div className={s.loop}>
                    {editModeSearch ? <div className={s.loop__search}>
                        <ul>
                            <IoMdClose onClick={() => {
                                if (editModeSearch === true) {
                                    searchTouchOff()
                                }
                            }} className={s.loop__close}/>
                            <li>All</li>
                            <li>Laptops</li>
                            <li>Phone</li>
                            <li>Headphones</li>
                            <li>Сamera</li>
                        </ul>
                    </div> : <FiSearch/>}
                </div>
                {editModeSearch ? null : <div className={s.loop__openSearch}>Search</div>}
            </div>


        </form>

    )
}



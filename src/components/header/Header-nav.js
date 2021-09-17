import React from "react";
import logo from "../../image/header/download.webp";
import s from "./css/header_navigation.module.css";
import {AiOutlineHeart, BiBasket} from "react-icons/all";
import {NavLink} from "react-router-dom";
import {Search} from "./Search";
import {Qty} from "../../common/qty";
const HeaderNav = () => {
  return (
    <div>
      <div className={s.header}>
        <div className={s.header__logo}>
         <NavLink to="./home"><img src={logo} alt="logo" /></NavLink>
        </div>
        <div className={s.header__section}>
            <div className={s.header__search}>
                <Search />
            </div>
            <div className={s.header__buttons}>
                <div className={s.header__buttons__following}>
                    <div className={s.header__buttons__following__AiOutlineHeart}>
                        <AiOutlineHeart /> <Qty />
                    </div>
                    Your Wishlist
                </div>
                <div className={s.header__buttons__store}>
                    <div className={s.header__buttons__following__BiBasket}>
                        <BiBasket /> <Qty />
                    </div>
                    Your Cart</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;

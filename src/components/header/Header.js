import React from "react";
import S from "./css/header.module.css";
import {AiOutlineMail, BiPhone, MdPlace, RiAccountPinCircleLine} from "react-icons/all";

export const Header = (props) => {
  return (
    <div className={S.top__header}>
      <div className={S.container}>
        <ul className={S.container__item}>
          <li>
              <span className={S.icon}> <BiPhone/> </span> <span className={S.dataStore}>{props.dataStore.phone}</span>
          </li>
          <li>
          <span className={S.icon}>  <AiOutlineMail /> </span> <span className={S.dataStore}>{props.dataStore.email}</span>
          </li>
          <li>
              <span className={S.icon}> <MdPlace /> </span> <span className={S.dataStore}>{props.dataStore.index} {props.dataStore.street}</span>
          </li>
        </ul>
      </div>
       <div className={S.account}><span className={S.account__icon}><RiAccountPinCircleLine/></span><span className={S.account__button}>My account</span></div>
    </div>
  );
};

import React from "react";
import { Header } from "./Header";
import HeaderNav from "./Header-nav";
import S from "./css/header_Combine.module.css";
const CombineHeader = (props) => {
  return (
    <div>
      <div className={S.header}>
        <div className={S.container__header}>
          <Header dataStore={props.dataStore} />
        </div>
      </div>
      <div className={S.navigation}>
        <div className={S.container__nav}>
          <HeaderNav />
        </div>
      </div>
    </div>
  );
};

export default CombineHeader;

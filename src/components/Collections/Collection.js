import React from "react";
import S from "./css/Collection.module.css";
import { NavLink } from "react-router-dom";

const Collection = (props) => {
  return (
    <div>
      <span className={S.pageLaptops}>
        <NavLink to={"/laptops"}>Ноутбуки</NavLink>
      </span>
      <div className={S.section}>
        {props.data.map((i) => (
          <div key={i.id} className={S.block}>
            <div id={i.id}>
              <img src={i.img.small} alt="error" />
              <h5>{i.name}</h5>
              <p>
                {i.price}
                {i.currency}
              </p>
              <div>Рейтинг {i.rating}</div>
              <span>отзывов: {i.reviews}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;

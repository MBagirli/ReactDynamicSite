import HeaderCss from "./Header.module.css";
import Earth from "../img/Earth.png";
import React from "react";

const Header = () => {
  return (
    <header className={HeaderCss.container}>
      <ul className={HeaderCss.container__list}>
        <li>
          <h1 className={HeaderCss.container__list__h1}>ReactEarth</h1>
        </li>
        <li>
          <img
            className={HeaderCss.container__list__img}
            src={Earth}
            alt="Earth"
          />
        </li>
      </ul>
    </header>
  );
};

export default React.memo(Header);

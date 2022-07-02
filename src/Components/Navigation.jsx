import NavigationCss from "./Navigation.module.css";
import CButton from "./CButton";
import React from "react";

const Navigation = () => {
  return (
    <nav className={NavigationCss.container}>
      <ul className={NavigationCss.container__list}>
        <li className={NavigationCss.container__list__item}>
          <CButton>Africa</CButton>
        </li>
        <li className={NavigationCss.container__list__item}>
          <CButton>Americas</CButton>
        </li>
        <li className={NavigationCss.container__list__item}>
          <CButton>Asia</CButton>
        </li>
        <li className={NavigationCss.container__list__item}>
          <CButton>Europe</CButton>
        </li>
        <li className={NavigationCss.container__list__item}>
          <CButton>Oceania</CButton>
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(Navigation);

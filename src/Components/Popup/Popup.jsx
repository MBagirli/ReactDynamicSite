import React, { useContext } from "react";
import Add from "../Adder/Add";
import PopupCss from "./Popup.module.css";

const Popup = () => {
  let { Popup, PopupInfo, Close } = useContext(Add);

  const CloseHandler = () => {
    Close(false);
  };

  return (
    <div
      onClick={CloseHandler}
      id={Popup ? PopupCss.Opened : ""}
      className={PopupCss.Maincontainer}
    >
      <div className={PopupCss.container}>
        <div className={PopupCss.container__firstInf}>
          <h2 className={PopupCss.container__firstInf__name}>
            Country : {Popup ? PopupInfo.name.common : ""}
          </h2>
          <div className={PopupCss.container__firstInf__flagctn}>
            <img
              className={PopupCss.container__firstInf__flagctn__img}
              src={Popup ? PopupInfo.flags.png : ""}
              alt="Flag"
            />
          </div>
        </div>
        <div className={PopupCss.container__secondInf}>
          <div className={PopupCss.container__secondInf__container}>
            <p className={PopupCss.container__secondInf__container__p}>
              Capital(s) :{" "}
              {Popup
                ? PopupInfo.capital.map((item) => {
                    return `${item}  `;
                  })
                : ""}
            </p>
            <p className={PopupCss.container__secondInf__container__p}>
              Language(s) :{" "}
              {Popup
                ? Object.values(PopupInfo.languages).map((item) => {
                    return `${item}  `;
                  })
                : ""}
            </p>
            <p className={PopupCss.container__secondInf__container__p}>
              Population : {Popup ? PopupInfo.population : ""}
            </p>
            <p className={PopupCss.container__secondInf__container__p}>
              Continent(s) :{" "}
              {Popup
                ? PopupInfo.continents.map((item) => {
                    return `${item}  `;
                  })
                : ""}
            </p>
            <p className={PopupCss.container__secondInf__container__p}>
              Region(s) : {Popup ? PopupInfo.region : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Popup);

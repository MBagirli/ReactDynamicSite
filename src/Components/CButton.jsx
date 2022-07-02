import { useContext } from "react";
import { useRef } from "react";
import Add from "./Adder/Add";
import CButtonCss from "./CButton.module.css";

const CButton = (props) => {
  let btnvalue = useRef();
  let { search } = useContext(Add);

  let ClickHandler = () => {
    search(btnvalue.current.outerText);
  };

  return (
    <button onClick={ClickHandler} className={CButtonCss.btn}>
      <span className={CButtonCss.btn__span}></span>
      <p ref={btnvalue} className={CButtonCss.btn__p}>
        {props.children}
      </p>
    </button>
  );
};

export default CButton;

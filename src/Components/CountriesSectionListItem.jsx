import { useContext } from "react";
import Add from "./Adder/Add";
import CountriesSectionListItem from "./CountriesSectionListItem.module.css";

const ListItem = (props) => {
  let { Open } = useContext(Add);

  const ClickHandler = () => {
    Open(props.obj, true);
  };

  return (
    <li onClick={ClickHandler} className={CountriesSectionListItem.container}>
      <div className={CountriesSectionListItem.container__imgctn}>
        <img
          className={CountriesSectionListItem.container__imgctn__img}
          src={props.obj.flags.png}
          alt="Country"
        />
      </div>
    </li>
  );
};

export default ListItem;

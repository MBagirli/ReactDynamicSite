import { useContext } from "react";
import Add from "./Adder/Add";
import CountriesSectionList from "./CountriesSectionList.module.css";
import ListItem from "./CountriesSectionListItem";
import LoadingImage from "../img/blue-wheel-loading.gif";

const List = () => {
  let { Info, Loading, Error } = useContext(Add);

  let content = <p className={CountriesSectionList.Default}>Let's Start!</p>;

  if (Loading) {
    content = (
      <img
        className={CountriesSectionList.Loading}
        src={LoadingImage}
        alt="LoadingImage"
      />
    );
  } else if (Info.length !== 0) {
    content = Info.map((item, index) => {
      return <ListItem obj={item} key={index} />;
    });
  } else if (Error) {
    content = <p className={CountriesSectionList.Default}>{Error}</p>;
  }

  return <ul className={CountriesSectionList.container}>{content}</ul>;
};

export default List;

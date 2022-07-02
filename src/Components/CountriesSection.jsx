import List from "./CountriesSectionList";
import React from "react";

const Section = () => {
  return (
    <section>
      <List />
    </section>
  );
};

export default React.memo(Section);

import React from "react";

import "./header.scss";

import PersonalInfo from "./item";

export default ({ data }) => {
  return (
    <section className="section-header">
      <PersonalInfo data={data} />
    </section>
  );
};

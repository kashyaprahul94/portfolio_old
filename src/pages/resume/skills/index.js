import React from "react";

import "./skills.scss";

import { Card } from "components/card";

import Skills from "./item";

export default ({ data }) => {
  return (
    <section className="section-skills">
      <Card title="Technical Skills">
        <Skills data={data} />
      </Card>
    </section>
  );
};

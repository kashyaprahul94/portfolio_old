import React from "react";

import "./education.scss";

import { Card } from "components/card";

import Education from "./item";

export default ({ data }) => {
  return (
    <section className="section-education">
      <Card title="Education">
        {data.map(education => (
          <div className="education" key={education.id}>
            <Education education={education} />
          </div>
        ))}
      </Card>
    </section>
  );
};

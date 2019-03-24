import React from "react";

import "./experience.scss";

import { Card } from "components/card";

import Experience from "./item";

export default ({ data }) => {
  return (
    <section className="section-experience">
      <Card title="Experience">
        {data.map(experience => (
          <div className="experience" key={experience.id}>
            <Experience experience={experience} />
          </div>
        ))}
      </Card>
    </section>
  );
};

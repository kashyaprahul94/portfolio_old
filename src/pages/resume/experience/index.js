import React from "react";

import "./experience.scss";

import { Card } from "components/card";

import Experience from "./item";

export default ({ data }) => {
  return (
    <div className="experience">
      <Card title="Experience">
        {data.map(experience => (
          <Experience key={experience.id} experience={experience} />
        ))}
      </Card>
    </div>
  );
};

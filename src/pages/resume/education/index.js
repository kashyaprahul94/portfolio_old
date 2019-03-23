import React from "react";

import "./education.scss";

import { Card } from "components/card";

import Education from "./item";

export default ({ data }) => {
  return (
    <div className="Education">
      <Card title="education">
        {data.map(education => (
          <Education key={education.id} education={education} />
        ))}
      </Card>
    </div>
  );
};

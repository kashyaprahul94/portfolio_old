import React from "react";

import "./skills.scss";

import { Card } from "components/card";

import Skills from "./item";
import SkillsShowcase from "./showcase";

export const TechnicalSkills = ({ data }) => {
  return (
    <section className="section-skills">
      <Card title="Technical Skills">
        <Skills data={data} />
      </Card>
    </section>
  );
};

export const SkillsShowroom = () => {
  return (
    <section className="section-skills">
      <Card>
        <SkillsShowcase />
      </Card>
    </section>
  );
};

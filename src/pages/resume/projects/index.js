import React from "react";

import "./projects.scss";

import { Card } from "components/card";

import Professional from "./professional";
import Personal from "./personal";

export const ProfessionalProjects = ({ data }) => {
  const projects = data.filter(project => project.type === "PROFESSIONAL");
  return (
    <section className="section-projects">
      <Card title="Professional Projects">
        <Professional data={projects} />
      </Card>
    </section>
  );
};

export const PersonalProjects = ({ data }) => {
  const projects = data.filter(project => project.type === "PERSONAL");
  return (
    <section className="section-projects">
      <Card title="Personal Projects">
        <Personal data={projects} />
      </Card>
    </section>
  );
};

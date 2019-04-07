import React from "react";

import "./projects.scss";

import { Card } from "components/card";

import Professional from "./professional";
import Personal from "./personal";

const ProfessionalProjects = ({ data, hideTitle }) => {
  const projects = data.filter(project => project.type === "PROFESSIONAL");
  return (
    !!projects.length && (
      <section className="projects-area">
        <Card
          title="Professional Projects"
          transparent={true}
          hideTitle={hideTitle}
        />
        <Professional data={projects} />
      </section>
    )
  );
};

const PersonalProjects = ({ data, hideTitle }) => {
  const projects = data.filter(project => project.type === "PERSONAL");
  return (
    !!projects.length && (
      <section className="projects-area">
        <Card title="Personal Projects" transparent={true} hideTitle={false} />
        <Personal data={projects} />
      </section>
    )
  );
};

export default ({ data, hideTitle }) => {
  return (
    <section className="section-projects">
      <ProfessionalProjects data={data} hideTitle={hideTitle} />
      <PersonalProjects data={data} hideTitle={hideTitle} />
    </section>
  );
};

import React from "react";

import { Card } from "components/card";
import { Icon, faCodeBranch, faStream } from "components/icons";

//
//

const Tech = ({ techs }) => {
  return (
    <span className="techs">
      {techs.map((tech, index) => (
        <span key={index} className="tech">
          {tech}
        </span>
      ))}
    </span>
  );
};

const MetaData = ({ role, techs }) => {
  return (
    <p className="project-item--metadata">
      <Tech techs={techs} />
    </p>
  );
};

const ProjectItem = ({ title, employer, description, role, techs }) => {
  return (
    <div className="project-item">
      <p className="project-item--title">
        <span className="icon">
          <Icon icon={faCodeBranch} />
        </span>
        <span className="title">{title}</span>
      </p>
      <div className="project-item--description">
        <ul className="project-item--description-area">
          {description.map((descriptionItem, index) => (
            <li key={index} className="project-item--description-item">
              <span className="icon">
                <Icon icon={faStream} />
              </span>
              <span>{descriptionItem}</span>
            </li>
          ))}
        </ul>
      </div>
      <MetaData role={role} techs={techs} />
    </div>
  );
};

const ProjectItems = ({ data }) => {
  return (
    !!data.length &&
    data.map(project => (
      <Card padding={true} key={project.id}>
        <ProjectItem {...project} />
      </Card>
    ))
  );
};

export default ({ data }) => {
  return (
    <div className="project-items">
      <ProjectItems data={data} />
    </div>
  );
};

import React from "react";

import { Grid, Row, Col } from "components/grid";
import { Icon, faCodeBranch } from "components/icons";

//
//

const Tech = ({ techs }) => {
  const techsString = techs.join(", ");
  return (
    <span>
      with <span className="techs">{techsString}</span>
    </span>
  );
};

const MetaData = ({ role, techs }) => {
  return (
    <p className="project-item--metadata">
      Worked <Tech techs={techs} />
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
      <p className="project-item--description">{description}</p>
      <MetaData role={role} techs={techs} />
    </div>
  );
};

const ProjectItems = ({ data }) => {
  return (
    <Grid fluid>
      {!!data.length &&
        data.map(project => (
          <Row key={project.id}>
            <Col xs>
              <ProjectItem {...project} />
            </Col>
          </Row>
        ))}
    </Grid>
  );
};

export default ({ data }) => {
  return (
    <div className="project-items">
      <ProjectItems data={data} />
    </div>
  );
};

import React from "react";

import { Grid, Row, Col } from "components/grid";

//
//

const EmployerLogo = ({ logo }) => {
  return (
    <div className="experience-item--logo">
      <img src={logo} alt="logo" />
    </div>
  );
};

const EmployerName = ({ name }) => {
  return <span className="employer-name">{name}</span>;
};
const EmployerLocation = ({ city, country }) => {
  return (
    <span className="employer-location">
      {city}, {country}
    </span>
  );
};
const employer = ({ company, city, country }) => {
  return (
    <p>
      <EmployerName name={company} />
      <span> - </span>
      <EmployerLocation city={city} country={country} />
    </p>
  );
};

const duration = ({ from, to }) => {
  return (
    <p>
      <span>{from}</span>
      <span> - </span>
      <span>{to}</span>
    </p>
  );
};

const EmployerExperienceItem = ({ company, city, country, from, to }) => {
  return (
    <div className="experience-item--content">
      <div className="experience-item--employer">
        {employer({ company, city, country })}
      </div>

      <div className="experience-item--employer-duration">
        {duration({ from, to })}
      </div>
    </div>
  );
};

const EmployerItem = ({ experience }) => {
  return (
    <Row middle="xs">
      <Col className="col">
        <EmployerLogo {...experience} />
      </Col>
      <Col className="col">
        <EmployerExperienceItem {...experience} />
      </Col>
    </Row>
  );
};

const Description = ({ description }) => {
  return <p className="experience-item--description">{description}</p>;
};

const ExperienceItem = ({ experience }) => {
  return (
    <Grid fluid>
      <Row>
        <Col xs>
          <EmployerItem experience={experience} />
        </Col>
      </Row>
      <Row>
        <Col xs>
          <Description {...experience} />
        </Col>
      </Row>
    </Grid>
  );
};

export default ({ experience }) => {
  return (
    <div className="experience-item">
      <ExperienceItem experience={experience} />
    </div>
  );
};

import React from "react";

import { Grid, Row, Col } from "components/grid";

const companyLocation = ({ city, country }) => {
  return (
    <>
      {city}, {country}
    </>
  );
};
const employer = ({ company, city, country }) => {
  return (
    <p>
      <span className="employer-name">{company}</span>
      <span> - </span>
      <span className="employer-location">
        {companyLocation({ city, country })}
      </span>
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

export default ({ experience }) => {
  const { logo, company, city, country, from, to, description } = experience;
  return (
    <div className="experience-item">
      <Grid fluid>
        <Row middle="xs">
          <Col>
            <div className="experience-item--logo">
              <img src={logo} alt="logo" />
            </div>
          </Col>
          <Col>
            <div className="experience-item--content">
              <div className="experience-item--employer">
                {employer({ company, city, country })}
              </div>

              <div className="experience-item--employer-duration">
                {duration({ from, to })}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="experience-item--description">{description}</p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

import React from "react";

import { Grid, Row, Col } from "components/grid";
import { Icon, faStar, faTrophy } from "components/icons";

//
//

const Duration = ({ from, to }) => {
  return (
    <p className="education-item--duration">
      <span>{from}</span>
      <span> - </span>
      <span>{to}</span>
    </p>
  );
};

const Location = ({ city, country }) => {
  return (
    <p className="education-item--location">
      {city}, {country}
    </p>
  );
};

const Title = ({ title }) => {
  return <p className="education-item--title">{title}</p>;
};
const Institute = ({ institute }) => {
  return <p className="education-item--institute">{institute}</p>;
};
const Details = ({ education }) => {
  return (
    <div className="education-item--details">
      <Row between="xs">
        <Col xs>
          <Duration {...education} />
        </Col>
        <Col xs>
          <Location {...education} />
        </Col>
      </Row>
    </div>
  );
};
const Score = ({ education }) => {
  return (
    <p className="education-item--score">
      <span className="icon">
        <Icon icon={faStar} />
      </span>
      <span>{education.score}</span>
    </p>
  );
};
const Achievement = ({ achievement }) => {
  return (
    <p className="education-item--achievement">
      <span className="icon">
        <Icon icon={faTrophy} />
      </span>
      <span>{achievement}</span>
    </p>
  );
};
const Achievements = ({ achievements }) => {
  return (
    <div className="education-item--achievements">
      {achievements.map(achievement => (
        <Achievement
          achievement={achievement.description}
          key={achievement.id}
        />
      ))}
    </div>
  );
};

const EducationItem = ({ education }) => {
  return (
    <Grid fluid>
      <Row>
        <Col xs>
          <Title {...education} />
        </Col>
      </Row>
      <Row>
        <Col xs>
          <Institute {...education} />
        </Col>
      </Row>
      <Row>
        <Col xs>
          <Details education={education} />
        </Col>
      </Row>
      <Row>
        <Col xs>
          <Score education={education} />
        </Col>
      </Row>
      {education.achievements.length > 0 && (
        <Row>
          <Col xs>
            <Achievements {...education} />
          </Col>
        </Row>
      )}
    </Grid>
  );
};

export default ({ education }) => {
  return (
    <div className="education-item">
      <EducationItem education={education} />
    </div>
  );
};

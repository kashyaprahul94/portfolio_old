import React from "react";

import { Grid, Row, Col } from "components/grid";
import {
  Icon,
  faMobileAlt,
  faEnvelope,
  faLinkedinIn,
  faGithubAlt,
  faMapMarkerAlt,
  faGlobeAsia
} from "components/icons";

//
//

const Thumb = ({ thumb }) => {
  return (
    <div className="header-item--thumb">
      <img src={thumb} alt="thumb" />
    </div>
  );
};

const Name = ({ firstName, lastName }) => {
  return (
    <h1 className="header-item--name">
      <span className="first-name">{firstName}</span>
      <span> </span>
      <span className="last-name">{lastName}</span>
    </h1>
  );
};
const Title = ({ title }) => {
  return (
    <h2 className="header-item--title">
      <span>{title}</span>
    </h2>
  );
};

const Location = ({ city, country }) => {
  return `${city}, ${country}`;
};

const InfoItem = ({ icon, text }) => {
  return (
    <p className="header-item--info-item">
      <span className="icon">
        <Icon icon={icon} fixedWidth />
      </span>
      <span className="text">{text}</span>
    </p>
  );
};

const Info = ({ data }) => {
  const { mobile, email, gitHub, linkedIn, website } = data;
  const location = Location(data);
  return (
    <div className="header-item--info">
      <Row>
        <Col xs={4}>
          <InfoItem icon={faMobileAlt} text={mobile} />
        </Col>
        <Col xs>
          <InfoItem icon={faLinkedinIn} text={linkedIn} />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <InfoItem icon={faEnvelope} text={email} />
        </Col>
        <Col xs>
          <InfoItem icon={faGithubAlt} text={gitHub} />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <InfoItem icon={faMapMarkerAlt} text={location} />
        </Col>
        {!!website && (
          <Col xs>
            <InfoItem icon={faGlobeAsia} text={website} />
          </Col>
        )}
      </Row>
    </div>
  );
};

const Content = ({ data }) => {
  return (
    <div className="header-item--content">
      <Row>
        <Col xs>
          <Name {...data} />
        </Col>
      </Row>
      <Row>
        <Col xs>
          <Title {...data} />
        </Col>
      </Row>
      <Row>
        <Col xs>
          <Info data={data} />
        </Col>
      </Row>
    </div>
  );
};

const PersonalInfoItems = ({ data }) => {
  return (
    <Grid fluid>
      <Row middle="xs">
        <Col xs={2}>
          <Thumb {...data} />
        </Col>
        <Col xs={10}>
          <Content data={data} />
        </Col>
      </Row>
    </Grid>
  );
};

export default ({ data }) => {
  return (
    <div className="header-item">
      <PersonalInfoItems data={data} />
    </div>
  );
};

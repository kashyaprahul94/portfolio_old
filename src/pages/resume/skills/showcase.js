import React from "react";
import MD5 from "md5";

import { Grid, Row, Col } from "components/grid";
import {
  Icon,
  faAngular,
  faLess,
  faSass,
  faReact,
  faHtml5,
  faCss3Alt,
  faNpm,
  faJs,
  faNodeJs,
  faVuejs
} from "components/icons";

//
//

const getSkillIcons = () => {
  return [
    faHtml5,
    faCss3Alt,
    faLess,
    faSass,
    faJs,
    faAngular,
    faReact,
    faVuejs,
    faNodeJs,
    faNpm
  ];
};

const SkillShowcase = ({ data }) => {
  return (
    <div className="skills-showcase">
      <Grid fluid>
        <Row around="xs" className="skills-showcase--container">
          {data.length &&
            data.map(skillIcon => (
              <Col key={MD5(skillIcon.iconName)}>
                <span className="icon">
                  <Icon icon={skillIcon} />
                </span>
              </Col>
            ))}
        </Row>
      </Grid>
    </div>
  );
};

export default ({ data }) => {
  return (
    <div className="skills-showcase">
      <SkillShowcase data={getSkillIcons()} />
    </div>
  );
};

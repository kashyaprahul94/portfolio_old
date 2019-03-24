import React from "react";

import { Grid, Row, Col } from "components/grid";

//
//

const Progress = ({ value }) => {
  return (
    <div className="skill-progressbar">
      <div className="skill-progress" style={{ width: value + "%" }} />
    </div>
  );
};

const SkillItem = ({ category, items, meter }) => {
  const _items = `${items.join(", ")}.`;
  return (
    <Row middle="xs" between="xs" className="skill-item">
      <Col xs={!!meter ? 8 : 11}>
        <div className="skill-item--group">
          <p className="skill-item--category">{category}</p>
          <p className="skill-item--description">{_items}</p>
        </div>
      </Col>
      {!!meter && (
        <Col xs={3}>
          <Progress value={meter} />
        </Col>
      )}
    </Row>
  );
};

const SkillItems = ({ data }) => {
  return (
    <Grid fluid>
      {data.length &&
        data.map(skill => (
          <Row key={skill.id}>
            <Col xs>
              <SkillItem {...skill} />
            </Col>
          </Row>
        ))}
    </Grid>
  );
};

export default ({ data }) => {
  return (
    <div className="skill-items">
      <SkillItems data={data} />
    </div>
  );
};

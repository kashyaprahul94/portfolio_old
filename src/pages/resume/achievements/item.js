import React from "react";

import { Row, Col } from "components/grid";
import { Icon, faMedal } from "components/icons";

//
//

const Achievement = ({ description }) => {
  return (
    <p className="achievement-item--description">
      <span className="icon">
        <Icon icon={faMedal} />
      </span>
      <span dangerouslySetInnerHTML={{ __html: description }} />
    </p>
  );
};

const AchievementItem = ({ achievement }) => {
  return (
    <Row>
      <Col xs>
        <Achievement {...achievement} />
      </Col>
    </Row>
  );
};

export default ({ achievement }) => {
  return (
    <div className="achievement-item">
      <AchievementItem achievement={achievement} />
    </div>
  );
};

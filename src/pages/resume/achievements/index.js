import React from "react";

import "./achievements.scss";

import { Card } from "components/card";
import { Grid } from "components/grid";

import Achivement from "./item";

export default ({ data }) => {
  return (
    <section className="section-achievements">
      <Card title="Achivements &amp; Rewards">
        <Grid fluid className="achievement-items">
          {data.map(achievement => (
            <div className="achievement" key={achievement.id}>
              <Achivement achievement={achievement} />
            </div>
          ))}
        </Grid>
      </Card>
    </section>
  );
};

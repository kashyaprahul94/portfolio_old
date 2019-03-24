import React, { Component } from "react";

//
import "./resume.scss";

//
//
import { Grid, Row, Col } from "components/grid";
import { Sheet } from "components/sheet";

//
//
import personalData from "./data/personal";
import experienceData from "./data/experience";
import educationData from "./data/education";
import skillsData from "./data/skills";

//
import Header from "./header";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";

//
//
export default class extends Component {
  constructor(props) {
    super(props);
    this.personalData = personalData();
    this.experiences = experienceData();
    this.educations = educationData();
    this.skills = skillsData();
  }
  componentDidMount() {}
  render() {
    return (
      <div id="Resume">
        <Sheet>
          <Grid fluid>
            <Row>
              <Col xs>
                <Header data={this.personalData} />
              </Col>
            </Row>
            <Row>
              <Col xs={5}>
                <Experience data={this.experiences} />
                <Education data={this.educations} />
              </Col>
              <Col xs={7}>
                <Skills data={this.skills} />
              </Col>
            </Row>
          </Grid>
        </Sheet>
      </div>
    );
  }
}

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
import achievementsData from "./data/achievements";
import projectsData from "./data/projects";

//
import Header from "./header";
import Experience from "./experience";
import Education from "./education";
import { TechnicalSkills, SkillsShowroom } from "./skills";
import Achievements from "./achievements";
import Projects from "./projects";

//
//

const NUM_OF_PROJECTS_PER_PAGE = 5;

//
//
export default class extends Component {
  constructor(props) {
    super(props);
    this.personalData = personalData();
    this.experiences = experienceData();
    this.educations = educationData();
    this.skills = skillsData();
    this.achievements = achievementsData();

    const projects = projectsData();
    const professionalProjects = projects.filter(
      project => project.type === "PROFESSIONAL"
    );
    const personalProjects = projects.filter(
      project => project.type === "PERSONAL"
    );

    this.projects = [];

    for (const project of professionalProjects) {
      if (
        (this.projects[this.projects.length - 1 || 0] || []).length %
          NUM_OF_PROJECTS_PER_PAGE ===
        0
      ) {
        this.projects.push([]);
      }
      this.projects[this.projects.length - 1].push(project);
    }

    for (const project of personalProjects) {
      if (
        (this.projects[this.projects.length - 1 || 0] || []).length %
          NUM_OF_PROJECTS_PER_PAGE ===
        0
      ) {
        this.projects.push([]);
      }
      this.projects[this.projects.length - 1].push(project);
    }

    this.state = {
      isFullScreen: false
    };
  }
  componentDidMount() {
    if (window.localStorage.printMode) {
      this.setState({
        isFullScreen: true
      });
    }
  }

  render() {
    return (
      <div id="Resume" className={this.state.isFullScreen ? "print-mode" : ""}>
        <Sheet>
          <Grid fluid>
            <Row>
              <Col xs>
                <Header data={this.personalData} />
              </Col>
            </Row>
            <Row middle="xs">
              <Col xs={5}>
                <Experience data={this.experiences} />
                <Education data={this.educations} />
              </Col>
              <Col xs={7}>
                <TechnicalSkills data={this.skills} />
                <SkillsShowroom />
              </Col>
            </Row>
            <Row>
              <Col xs>
                <Achievements data={this.achievements} />
              </Col>
            </Row>
          </Grid>
        </Sheet>
        {!!this.projects.length &&
          this.projects.map((projectGroup, index) => (
            <Sheet key={index}>
              <Grid fluid>
                <Row>
                  <Col xs>
                    <Projects data={projectGroup} hideTitle={index !== 0} />
                  </Col>
                </Row>
              </Grid>
            </Sheet>
          ))}
      </div>
    );
  }
}

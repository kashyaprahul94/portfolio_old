import MD5 from "md5";

import logoSAP from "./logos/sap.png";
import logoWF from "./logos/wf.png";

class Experience {
  constructor({ company, city, country, from, to = null, description, logo }) {
    this.company = company;
    this.city = city;
    this.country = country;
    this.from = from;
    this.to = to || "Present";
    this.description = description;
    this.logo = logo;

    this.id = MD5(
      [this.company, this.city, this.country, this.from, this.to].join("__")
    );
  }
}

const experiences = [];

const init = () => {
  experiences.unshift(
    new Experience({
      company: "SAP Labs India",
      city: "Bangalore",
      country: "India",
      from: "Aug 2014",
      to: "Jan 2019",
      description:
        "Started as JavaScript Developer and grew up as Full Stack Developer & Cloud Architect.",
      logo: logoSAP
    })
  );
  experiences.unshift(
    new Experience({
      company: "Wunderflats GmbH",
      city: "Berlin",
      country: "Germany",
      from: "Feb 2019",
      description: "Started as Senior JavaScript Engineer.",
      logo: logoWF
    })
  );
};

init();

//
//
//
export default () => experiences;

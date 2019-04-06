import MD5 from "md5";

import logoSAP from "./images/sap.png";
import logoWF from "./images/wf.png";

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
        "Started as UI Developer and grew up as Full Stack Developer & Cloud Architect.",
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

  return experiences;
};

//
//
//
export default () => init();

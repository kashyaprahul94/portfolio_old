import DefaultThumb from "./images/thumb.png";

class PersonalInfo {
  constructor({
    firstName,
    lastName,
    title,
    mobile,
    email,
    city,
    country,
    linkedIn,
    gitHub,
    website = null,
    thumb = DefaultThumb
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.mobile = mobile;
    this.email = email;
    this.city = city;
    this.country = country;
    this.linkedIn = linkedIn;
    this.gitHub = gitHub;
    this.website = website;
    this.thumb = thumb;
  }
}

//
//

let infoIndiaBangalore = {}; //eslint-disable-line no-unused-vars
let infoGermanyBerlin = {};

let current = {};

const init = () => {
  const commonInfo = {
    firstName: "Rahul",
    lastName: "Kashyap",
    title: "Full Stack Developer",
    email: "kashyaprahul94@gmail.com",
    mobile: "+91 7503911679",
    country: "India",
    linkedIn: "linkedin.com/in/rahul-kashyap",
    gitHub: "github.com/kashyaprahul94"
  };

  infoIndiaBangalore = new PersonalInfo({
    ...commonInfo,
    city: "Bangalore"
  });

  infoGermanyBerlin = new PersonalInfo({
    ...commonInfo,
    city: "Berlin",
    country: "Germany",
    mobile: "+49 1521 0579203"
  });

  current = infoGermanyBerlin;
};

init();

//
//
//
export default () => current;

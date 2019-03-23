import MD5 from "md5";

class Education {
  constructor({
    title,
    insitute,
    city,
    country,
    from,
    to = null,
    score,
    achievements = []
  }) {
    this.title = title;
    this.insitute = insitute;
    this.city = city;
    this.country = country;
    this.from = from;
    this.to = to || "Present";
    this.score = score;
    this.achievements = achievements;

    this.id = MD5(
      [
        this.title,
        this.insitute,
        this.city,
        this.country,
        this.from,
        this.to
      ].join("__")
    );
  }
}

const educations = [];

const init = () => {
  educations.unshift(
    new Education({
      title: "Bachelor of Computer Applications",
      insitute: "Guru Gobind Singh Indraprastha University",
      city: "Delhi",
      country: "India",
      from: 2011,
      to: 2014,
      score: "95.56% Score",
      achievements: ["University Gold Medalist"]
    })
  );
  educations.unshift(
    new Education({
      title: "Master of Technology",
      insitute: "Birla Insitute of Technology & Science",
      city: "Bangalore",
      country: "India",
      from: 2014,
      to: 2018,
      score: "9.23 / 10 CGPA"
    })
  );
};

init();

//
//
//
export default () => educations;

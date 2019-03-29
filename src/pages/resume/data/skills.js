import MD5 from "md5";

class Skill {
  constructor({ category, items, meter = null }) {
    this.category = category;
    this.items = items;
    this.meter = meter;
    this.id = MD5(this.category);
  }
}

//
//

let skills = [];

const init = () => {
  skills.push(
    new Skill({
      category: "Full Stack",
      items: [
        "JavaScript (ESNext)",
        "TypeScript",
        "Node.js",
        "Angular",
        "React",
        "Vue.js",
        "Express.js",
        "MongoDB",
        "GraphQL",
        "RxJS"
      ],
      meter: 90
    })
  );

  skills.push(
    new Skill({
      category: "Frameworks & Pre-processors",
      items: [
        "SASS",
        "LESS",
        "Gulp",
        "GruntJS",
        "Babel",
        "Webpack",
        "Bootstrap",
        "Handlebars.js",
        "Mocha",
        "Jest",
        "Cypress"
      ],
      meter: 80
    })
  );

  skills.push(
    new Skill({
      category: "Mobile",
      items: [
        "Android",
        "iOS",
        "Hybrid Apps ( ionic, Cordova )",
        "Progressive Web Apps"
      ],
      meter: 50
    })
  );

  skills.push(
    new Skill({
      category: "Others",
      items: [
        "Redis",
        "RabbitMQ",
        "Apache Kafka",
        "Johnny-Five",
        "Amazon Alexa"
      ],
      meter: 50
    })
  );

  skills.push(
    new Skill({
      category: "Area of Interest",
      items: [
        "Cloud Architecture",
        "RESTful APIs & Micro-Services",
        "Design Patterns",
        "Scalable, Resilient & Distributed Systems",
        "Internet of Things",
        "Functional & Reactive Programming",
        "Cloud Foundry",
        "Service Broker",
        "CI/CD",
        "Docker",
        "Kubernetes"
      ]
    })
  );

  return skills;
};

//
//
//
export default () => init();

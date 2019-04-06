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
        "RxJS",
        "Socket.IO"
      ],
      meter: 85
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
      meter: 75
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
        "Serverless Architecture",
        "RESTful APIs & Micro-Services",
        "Design Patterns",
        "Scalable, Resilient & Distributed Systems",
        "Functional & Reactive Programming",
        "Internet of Things",
        "Open Service Broker",
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

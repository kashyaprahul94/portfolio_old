import MD5 from "md5";
const ProjectType = {
  Professional: "PROFESSIONAL",
  Personal: "PERSONAL"
};

class Project {
  constructor({ type, title, employer, description, from, to, role, techs }) {
    this.type = type;
    this.title = title;
    this.employer = employer;
    this.description = description;
    this.from = from;
    this.to = to;
    this.role = role;
    this.techs = techs;
    this.id = MD5(
      [
        this.title,
        this.description,
        this.from,
        this.country,
        this.to,
        this.role,
        this.techs
      ].join("__")
    );
  }
}

//
//

let projects = [];

const init = () => {
  //
  //
  projects.push(
    new Project({
      type: ProjectType.Professional,
      title: "Wunderflats",
      employer: "Wunderflats GmbH",
      description: ``,
      from: "Feb 2019",
      to: "Present",
      role: "Full Stack Engineer",
      techs: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Handlebars",
        "Jest",
        "Mocha"
      ]
    })
  );

  projects.push(
    new Project({
      type: ProjectType.Professional,
      title: "SAP Loyalty Marketing on SAP Cloud Platform",
      employer: "SAP Labs India",
      description: `This solution was a total revamp of the earlier SAP Hybris Loyalty that was built on YaaS Cloud Platform. This was based on Micro-Service Architecture deployed on Cloud Foundry within SAP Cloud Platform that leverages AWS infrastructure. My role in this project had been very important as I was working as an Architect there. I was responsible for overall design of the product, writing scalable and resilient Core Micro-Services for the solution written in Node.JS & TypeScript, by keeping performance in mind. Apart from Core Services, the solution was built using Java Spring-Boot based Business services and made use of various Cloud Foundry based backing services such as Redis, Apache Kafka, CF UAA, OAuth2, etc.`,
      from: "Aug 2017",
      to: "Jan 2019",
      role: "Architect & Full Stack Developer",
      techs: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "RxJS",
        "CloudFoundry",
        "Micro-Services",
        "Redis"
      ]
    })
  );

  projects.push(
    new Project({
      type: ProjectType.Professional,
      title: "SAP Loyalty Marketing StoreFront on REAN stack",
      employer: "SAP Labs India",
      description: `This storefront was designed to demonstrate the SAP Hybris Loyalty capabilities by consuming its RESTful Micro-Services. The Storefront was developed using Angular 4, Express, Node.JS, and Redis ( for persistence ), Bootstrap etc. I had developed this whole package which is architected into two scalable parts i.e. Frontend and Backoffice under my own steam. This storefront comprises of basic Commerce capabilities which are also built as RESTful APIs.`,
      from: "Nov 2017",
      to: "Jan 2019",
      role: "Architect & Full Stack Developer",
      techs: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Angular 4",
        "Bootstrap",
        "RxJS",
        "Redis"
      ]
    })
  );

  projects.push(
    new Project({
      type: ProjectType.Professional,
      title: "SAP Marketing Cloud - Mobile Channel",
      employer: "SAP Labs India",
      description: `This solution was the most eye-candy and most selling feature of the whole SAP Marketing portfolio. It made use of mass campaign execution with enablement of Mobile as the channel to reach out to customers. This product had integration with Google Firebase for Push Cloud Messaging service. I had taken up the iOS part where I developed SDK which could be consumed by customer very easily in with Cocoapods. I used various Design Patterns, RxSwift ( Reactive Programming ), and other best practices in order to make things reusable and simple of this whole complex box. I started this project as POC to realize the integration between iOS and Google Firebase alone. Apart from SDK, i had also created a Demo Application, which is now used across the regions by sales people to demonstrate the user story. For this application, i had done integration with Google Firebase for Push Notification scenario, had supported multi-tenancy, etc.`,
      from: "Dec 2016",
      to: "Jan 2019",
      role: "iOS Developer & DevOps",
      techs: [
        "iOS",
        "Swift",
        "CocoaPods",
        "Google Firebase",
        "RxSwift",
        "Alamofire",
        "SwiftyJSON"
      ]
    })
  );

  projects.push(
    new Project({
      type: ProjectType.Professional,
      title: "SAP Hybris Customer Journey on YaaS Cloud Platform",
      employer: "SAP Labs India",
      description: `This product was based on Micro-Service architecture deployed on Cloud Foundry running on YaaS Cloud platform. I worked there as AngularJS developer to create re-usable components and directives which were the USP of the whole product. The usage of those components was to have dynamic elements that can be draggable, droppable, resizable, rotatable etc. The components needed to have Rich-Textboxes, Images, Notes, Annotations, Container etc. These components then were connected to depict a journey of a customer with some annotations. I had taken up the whole designer part and created these components on top of vanilla jQuery version in API driven manner, so that they can be used in other part of the projects.`,
      from: "May 2016",
      to: "Dec 2016",
      role: "FroneEnd Developer",
      techs: ["Angular JS", "jQuery", "JavaScript", "Gulp"]
    })
  );

  projects.push(
    new Project({
      type: ProjectType.Professional,
      title: "SAP Hybris Loyalty IoT Mobile App",
      employer: "SAP Labs India",
      description: `This mobile application was used to demonstrate the capabilities related to Geo-Marketing that SAP Hybris Loyalty had got. For example: Geo-Fences, iBeacon, Apple / Google Wallet integration etc. I single-handedly developed the Mobile App using Cordova and Ionic framework. This mobile app consumed the Micro-Services that we had exposed from the Cloud Loyalty solution, and intuitively pushed the relevant Offers via Push Notifications to the user as and when he comes into the vicinity of iBeacon or Geofence. This app also had the integration with Apple & Google Wallet, where customer could add his Loyalty Membership card into wallet along with the Coupons pushed to him.`,
      from: "Nov 2016",
      to: "May 2017",
      role: "Mobile Developer",
      techs: [
        "JavaScript",
        "Angular JS",
        "ionic",
        "Cordova",
        "iBeacon",
        "Geofences",
        "Apple & Google Wallet"
      ]
    })
  );

  projects.push(
    new Project({
      type: ProjectType.Professional,
      title: "SAP Hybris Loyalty on YaaS Cloud Platform",
      employer: "SAP Labs India",
      description: `This product was based on the Micro-Service architecture deployed on Cloud Foundry within Hybris as a Service platform ( YaaS ).I started working as AngularJS Developer for this project. I had worked purely on UI for almost 1 year 3 months as UI lead. Contributed towards setting up foundation in terms of guidelines formation, project structure, creation of re-usable modules that leverage modularity and handling complex UI components such as Analytics, Rule-Engine etc. Then i started taking up backend related stuff in NodeJS and slowly moved into Full Stack area. I had worked on Elastic-Search integration within Node.JS for the Analytics Micro-Service there and i started my footprints on MEAN STACK.`,
      from: "Sept 2014",
      to: "May 2017",
      role: "Full Stack Developer",
      techs: [
        "JavaScript",
        "Angular JS",
        "Node.js",
        "GruntJS",
        "CloudFoundry",
        "ElasticSearch"
      ]
    })
  );

  //
  //

  projects.push(
    new Project({
      type: ProjectType.Personal,
      title: "Smart Home",
      description: `This is an Ad-Hoc Smart IoT powered solution which can be used to control various equipments such as Bulb, Fridge, Fan etc using RESTful APIs, and integrate with Amazon Alexa. This can be used to create SDKs, that could have been given to the partners and customers to create their own implementation of centrally controlled equipments by various channels. To realize this usecase, I had created a Smart-Bulb, which I had made on my own using LEDs, Resistors and other things. The bulb can be operated with a Progressive Web Application for remote usage, and in-home usage with Voice based assistant such as Amazon Alexa.`,
      techs: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "RxJS",
        "CloudFoundry",
        "Redis"
      ]
    })
  );

  projects.push(
    new Project({
      type: ProjectType.Personal,
      title: "Pizza Ordering System",
      description: `This solution is created using MEN stack. This offers RESTful APIs written in TypeScript & Node.JS, which are capable of the whole Commerce related processes such as Customer, Inventory, Cart, Checkout, Order managements. This does not offer any UI but can be consumed through any REST client such as POSTMAN. This solution also mimics the Java counter part of Spring Data by implementing Document Repository for each kind of entity using TypeScript.`,
      techs: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "RxJS",
        "CloudFoundry",
        "Redis"
      ]
    })
  );

  return projects;
};

//
//
//
export default () => init();
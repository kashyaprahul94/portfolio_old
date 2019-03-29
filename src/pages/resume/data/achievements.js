import MD5 from "md5";

class Achievement {
  constructor({ description }) {
    this.description = description;
    this.id = MD5(this.description);
  }
}

//
//

let achievements = [];

const init = () => {
  achievements.push(
    new Achievement({
      description:
        "Patent : <b>Visualizer</b> - A visualization tool for SAP Hybris as a Service cloud platform."
    })
  );
  achievements.push(
    new Achievement({
      description:
        "Patent : <b>FaaS on SAP CF</b> - Function as a Service for SAP Cloud Platform Cloud Foundry."
    })
  );
  achievements.push(
    new Achievement({
      description:
        "Received various awards such as: <b>Titan, Honor, Extra Ordinary Perfromer, Vibrant Team Player, POLE Star</b> etc."
    })
  );
  achievements.push(
    new Achievement({
      description: "Winner of <b>CEC Cloud Bootcamp 2015</b> at SAP Labs India."
    })
  );
  achievements.push(
    new Achievement({
      description:
        "Recognized for initiating innovative ideas and leading them."
    })
  );

  return achievements;
};

//
//
//
export default () => init();

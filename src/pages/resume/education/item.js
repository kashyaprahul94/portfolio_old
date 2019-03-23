import React from "react";

import { Grid, Row, Col } from "components/grid";

const instituteLocation = ({ city, country }) => {
  return (
    <>
      {city}, {country}
    </>
  );
};
const _institute = ({ institute, city, country }) => {
  return (
    <p>
      <span className="institute-name">{institute}</span>
      <span> - </span>
      <span className="institute-location">
        {instituteLocation({ city, country })}
      </span>
    </p>
  );
};

const duration = ({ from, to }) => {
  return (
    <p>
      <span>{from}</span>
      <span> - </span>
      <span>{to}</span>
    </p>
  );
};

export default ({ education }) => {
  const {
    title,
    institute,
    city,
    country,
    from,
    to,
    score,
    achivements
  } = education;
  return (
    <div className="education-item">
      <p>{title}</p>
      <p>{institute}</p>
      {_institute({ institute, city, country })}
      {duration({ from, to })}
      {score}
      {achivements}
    </div>
  );
};

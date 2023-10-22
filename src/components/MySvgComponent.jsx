import React from 'react';

const MySvgComponent = ({ name, address, gender, dob, height, id, categ, exp }) => {
  return (
    <svg viewBox="0 0 474.19356 311.04903">
      <style>
        {`
          .small {
            font: italic 13px sans-serif;
            fill: black;
          }
          .medium {
            font: normal 16px sans-serif;
            fill: black;
          }
          .heavy {
            font: bold 30px sans-serif;
            fill: black;
          }
        `}
      </style>
      <text x="40" y="35" className="heavy">{name}</text>
      <text x="100" y="55" className="medium">{address}</text>
      <text x="100" y="75" className="small">{gender}</text>
      <text x="100" y="95" className="small">{dob}</text>
      <text x="100" y="115" className="small">{height}</text>
      <text x="100" y="135" className="small">{id}</text>
      <text x="100" y="155" className="small">{categ}</text>
      <text x="100" y="175" className="small">{exp}</text>
    </svg>
  );
};

export default MySvgComponent;

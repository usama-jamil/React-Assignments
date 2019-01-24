import React from "react";

export default ({ displayList }) => (
  <ul>
    {displayList.map((item,index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

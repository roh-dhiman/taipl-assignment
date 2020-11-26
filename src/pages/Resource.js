import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Resource = (props) => {
  var [Color, setColor] = useState(true);
  const [loading, setLoading] = useState(true);
  const [resource, setResource] = useState(null);

  useEffect(async () => {
    const res = await fetch(
      "https://reqres.in/api/unknown/" + props.match.params.id
    );
    const data = await res.json();
    const item = data.data;
    setResource(item);
    setLoading(false);
  }, []);

  return (
    <div className="cards">
      {loading ? (
        <div>loading...</div>
      ) : (
        <li>
          <span>{(Color = resource.color)}</span>
          <div className="card" style={{ backgroundColor: Color }}>
            {resource.name}
            <br />
            <br />
            {resource.year}
            <br />
            <br />
            Pantone Value
            <br />
            {resource.pantone_value}
          </div>
        </li>
      )}
    </div>
  );
};

export default Resource;

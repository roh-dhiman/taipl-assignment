import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Resources = () => {
  const [loading, setLoading] = useState(true);
  var [Color, setColor] = useState(true);
  const [resources, setResources] = useState(null);

  useEffect(async () => {
    const res = await fetch("https://reqres.in/api/unknown");
    const data = await res.json();
    const item = data.data;
    setResources(item);
    setLoading(false);
  }, []);

  return (
    <div className="cards">
      {loading ? (
        <div>loading...</div>
      ) : (
        resources.map((resource) => (
          <li key={resource.id}>
            <span>{(Color = resource.color)}</span>
            <Link to={"/resources/" + resource.id} >
              <div className="card" style={{ backgroundColor: Color }}>
                {resource.name}
                <br />
                <br />
                <br />
                {resource.year}
              </div>
            </Link>
          </li>
        ))
      )}
    </div>
  );
};

export default Resources;

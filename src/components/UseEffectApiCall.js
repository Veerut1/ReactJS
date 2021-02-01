import React, { useState, useEffect } from "react";

function TestingUseEffectApiCalling() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("test");
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <div>
        <button onClick={() => setData([])}>Clear Data</button>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TestingUseEffectApiCalling;

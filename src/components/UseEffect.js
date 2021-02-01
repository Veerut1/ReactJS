import React, { useEffect, useState } from "react";

function TestingUseEffect() {
  const [name, setName] = useState("Alex");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    console.log(`${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`${admin ? "Admin" : "Not a admin"}`);
  }, [admin]);

  return (
    <section>
      <h1>Congratulations {name}!</h1>
      <button
        onClick={() => (name === "Alex" ? setName("Veeru") : setName("Alex"))}
      >
        Change Winner
      </button>
      <br />
      <br />
      <button onClick={() => (admin ? setAdmin(false) : setAdmin(true))}>
        Log In
      </button>
    </section>
  );
}

export default TestingUseEffect;

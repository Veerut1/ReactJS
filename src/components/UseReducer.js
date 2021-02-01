import React, { useReducer } from "react";

const initialState = {
  message: "Hi!"
};

function reducer(state, action) {
  switch (action.type) {
    case "yell":
      return { message: "Hey!" };
    case "whisper":
      return { message: "Excuse me!" };
    default:
      return { message: initialState.message };
  }
}

function TestUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
      <button onClick={() => dispatch({ type: "whisper" })}>WHISPER</button>
      <button onClick={() => dispatch({ type: "" })}>HI</button>
    </>
  );
}

export default TestUseReducer;

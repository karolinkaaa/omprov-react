// 3. Custom Hook useInput (3p)
// Skapa en hook useInput som tar hand om state för ett input-fält.
// useInput ska returnera funktionen för att uppdatera state och
// själva värdet från state.
// Använd sedan useInput i App-komponenten nedan för att spara det man
// skriver in i ett input-fält. Det man skriver in ska visas under inputfältet.
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState([]);
  const [newInput, setNewInput] = useState("");

  function handleChange() {
    if (newInput) {
      setInput([...input, newInput]);
      setNewInput("");
    }
  }
  return (
    <div>
      <input
        type="text"
        value={newInput}
        onChange={(e) => setNewInput(e.target.value)}
      />
      <button onClick={handleChange}>Uppdatera input fält</button>
    </div>
  );
}

export default App;

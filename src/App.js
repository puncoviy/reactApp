import React, {useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState('text from input');

  return (
    <div className="App">
        <ClassCounter/>
        <ClassCounter/>
        <ClassCounter/>
    </div>
  );
}

export default App;

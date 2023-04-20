import { useState } from "react";

// import MyComponent from "./components/01-class-component";
import StateExample from "./components/02-class-state";
import ClassLifecycle from "./components/03-class-lifecycle";

function App() {
  const [showView, setShowView] = useState(true)

  return (
    <div className="App">
      <h1>Welcome to Class-based React! 🧩</h1>
      {/* <MyComponent title="This is the title" myProp={true} /> */}

      {
        showView
          ? (<ClassLifecycle />)
          : (<StateExample name="Omega" />)
      }

      <button onClick={() => setShowView(!showView)}>
        Switch!
      </button>
    </div>
  );
}

export default App;

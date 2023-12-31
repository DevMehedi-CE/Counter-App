import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen items-center justify-center bg-blue-500">
      <div className="bg-white rounded shadow text-center pt-8 text-lg font-medium">
        <h1 className="text-3xl mx-4 underline pb-3">
          Counter App
        </h1>
        <Counter/>
      </div>
    </div>
  );
}

export default App;

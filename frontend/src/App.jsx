import React from "react";
import { createRoot } from "react-dom/client";
import Homepage from "./pages/Homepage"; 



function App() {
  return (
    <div className="app">
      <Homepage />
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

export default App;
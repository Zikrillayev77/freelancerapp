import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"; // <-- E'tibor bering: Pages papkasidan olinmoqda
import { ThemeProvider } from "./Context/ThemeContext";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;

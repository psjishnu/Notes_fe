import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PublicRouter from "./PublicRouter";
function App() {
  return (
    <div className="relative bg-orange-4 min-h-screen">
      <Navbar className="mt-0" />
      <PublicRouter />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const handleThemeChange = () => {
    const themeValue = theme === "light" ? "dark" : "light";
    setTheme(themeValue);
    localStorage.setItem("theme", themeValue);
  };

  document.documentElement.setAttribute(
    "data-theme",
    theme === "dark" ? "dark" : "light"
  );

  return (
    <div className="app">
      <Button
        text={theme === "dark" ? "🌙" : "☀️"}
        className="theme-switcher"
        onClick={handleThemeChange}
      />
      <div style={{ marginTop: "70px", padding: "20px" }}>
        <Home />
      </div>
    </div>
  );
}

export default App;

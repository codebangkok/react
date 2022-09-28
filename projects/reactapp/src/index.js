import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App"
import ColorButton from "./components/button/ColorButton"

const el = document.getElementById("root");
const root = createRoot(el);
// root.render(<App name="Bond" age={10} />);
root.render(<ColorButton/>);


import React from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App";
import "./styles/tailwind.css"
import "./styles/globals.css"

const container = document.getElementById("App");
const root = createRoot(container);
root.render(<App />);

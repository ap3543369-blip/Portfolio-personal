import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap + Font Awesome (npm se, CDN ki zaroorat nahi)
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Tumhara purana CSS (same file, bas yahan import hoti hai)
import "./css/style.css";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

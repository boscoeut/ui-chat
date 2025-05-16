import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { BrowserRouter as Router } from "react-router-dom"
import { TooltipProvider } from "@/components/ui/tooltip"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </Router>
  </React.StrictMode>
)

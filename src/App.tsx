import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes/Router"
import { ThemeToggle } from "./components/Darkmode"

function App() {

  return (

    <BrowserRouter>
      <ThemeToggle />
      <Router />
    </BrowserRouter>

  )
}

export default App

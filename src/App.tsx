import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import Navbar from "./components/Navbar"

function App(): JSX.Element {

  return (
    <Router>
      <div className="navbar">
        <Navbar />
      </div>
      <AppRoutes />
    </Router>
  )
}

export default App

import { BrowserRouter as Router,Route ,Routes } from "react-router-dom"
import Frontend from "./pages/frontend/Frontend"
import Dashboard from "./pages/dashboard/Dashboard"
function App() {
  return (
    <Router>
      <Routes>
          {/* frontend  */}
        <Route exact path="/" element={<Frontend/>}/>
          {/* dashboard  */}
        <Route exact path="/dashboard/*" element={<Dashboard/>}/>
        {/* not found */}
        <Route exact path="/*" element={<h1>Not Found</h1>}/>

      </Routes>
    </Router>
  )
}

export default App

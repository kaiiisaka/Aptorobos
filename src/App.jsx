import Navbar from "./Components/Navbar.jsx";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter.jsx";
import bgRobot from "./assets/bgRobot.png"

function App() {

  return (
    <div className="App min-h-screen h-full bg-scroll bg-origin-border bg-cover" style={{backgroundImage: `url(${bgRobot})`}}>
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    </div>
  )
}

export default App

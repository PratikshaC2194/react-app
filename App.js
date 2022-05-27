
import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import Bollywood from "./components/Bollywood";
import Technology from "./components/Technology";
import Fitness from "./components/Fitness";
import Hollywood from "./components/Hollywood";
import Food from "./components/Food";
import Homebox from "./components/Homebox";

function App() {
  return (


      <div className="App">
        <BrowserRouter>
          <Home />
          <Routes>
            <Route path="/" element= {<Homebox />} />
            <Route path="/Homebox" element= {<Homebox />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/hollywood" element={<Hollywood />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/food" element={<Food />} />

          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
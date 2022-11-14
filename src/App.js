import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import {Navbar} from "./Navbar";
import {Home} from "./pages/Home";
import {Create} from "./pages/Create";
import {Edit} from "./pages/Edit";
import {BestTime} from "./pages/BestTime";
import {AllRidersTime} from "./pages/AllRidersTime";

function App() {
  return (

    <div className="App">
      <Router>
          <Navbar/>
          <Routes>
              <Route exact path ="/" element={<Home/>}/>
              <Route exact path ="/create" element={<Create/>}/>
              <Route exact path ="/bestTime" element={<BestTime/>}/>
              <Route exact path ="/allRidersTime" element={<AllRidersTime/>}/>
              <Route exact path ="/edit/:id" element={<Edit/>}/>
              <Route path = "*" element={<h1>PAGE NOT FOUND</h1>}/>
          </Routes>
      </Router>

    </div>
  );
}

export default App;

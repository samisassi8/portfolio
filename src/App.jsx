import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Competences from "./pages/Competences";

export default App;

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Profil id="profil" />
      <Competences id="Competences" />
    </Router>
  );
}

import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/footer/footer";
import Sections from "./components/section/sections/sections";

function App() {
  return (
    <div className="grid grid-cols-1">
      <Home />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;

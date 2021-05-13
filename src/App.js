import "./App.css";
import Home from "./screen/Home";
import Navbar from "./screen/Navbar";
function App() {
  return (
    <div>
      <div
        className="bg-leafs bg-center bg-cover 
                w-full h-screen"
      >
        <div className="fixed top-0 left-0 z-50 ">
          <Navbar />
        </div>
        <Home />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./screen/HomeScreen";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <div
        className="bg-leafs bg-center bg-cover 
                w-full h-screen"
      >
        <div className="fixed top-0 left-0 z-50 w-full lg:w-auto">
          <Navbar />
        </div>
        {/* <Home /> */}
      </div>
    </div>
  );
}

export default App;

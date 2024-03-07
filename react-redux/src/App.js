import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import HalamanSatuClass from "./pages/HalamanSatuClass";
import HalamanDuaFunction from "./pages/HalamanDuaFunction";
import CounterList from "./features/counterList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/class" element={<HalamanSatuClass />} />
        <Route path="/function" element={<HalamanDuaFunction />} />
        <Route path="/list" element={<CounterList />} />
      </Routes>
    </div>
  );
}

export default App;

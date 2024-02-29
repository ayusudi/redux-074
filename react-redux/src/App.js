import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import HalamanSatuClass from "./pages/HalamanSatuClass";
import HalamanDuaFunction from "./pages/HalamanDuaFunction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProvinces } from "./features/counterSlice";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
      .then(response => response.json())
      .then(provinces => dispatch(setProvinces(provinces)));
  }, [dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/class" element={<HalamanSatuClass />} />
        <Route path="/function" element={<HalamanDuaFunction />} />
      </Routes>
    </div>
  );
}

export default App;

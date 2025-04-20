import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Result } from "./pages/Result";
import { BuyCredits } from "./pages/BuyCredits";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredits />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Result } from "./pages/Result";
import { BuyCredits } from "./pages/BuyCredits";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredits />} />
      </Routes>
    </>
  );
}

export default App;

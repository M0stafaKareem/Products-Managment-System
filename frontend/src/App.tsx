import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { AllProductsPage } from "./pages/AllProductsPage";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllProductsPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { AllProductsPage } from "./pages/AllProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllProductsPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

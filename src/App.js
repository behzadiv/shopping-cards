import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Cards from "./pages/Carts";
import Layout from "./Layout/layout";
import CartProvider from "./provider/CartProvider";
function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route {...route} />
          ))}
          {/* <Route path="/" element={<HomePage />} />
        <Route path="/cards" element={<Cards />} /> */}
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;

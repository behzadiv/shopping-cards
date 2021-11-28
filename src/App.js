import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Layout from "./Layout/layout";
import CartProvider from "./provider/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./provider/AuthProvider";
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Layout>
          <ToastContainer />
          <Routes>
            {routes.map((route) => (
              <Route {...route} key={route.path} />
            ))}
            {/* <Route path="/" element={<HomePage />} />
        <Route path="/cards" element={<Cards />} /> */}
          </Routes>
        </Layout>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

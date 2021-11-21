import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Cards from "./pages/Cards";
import Layout from "./Layout/layout";
function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route)=><Route {...route}/>)}
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/cards" element={<Cards />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;

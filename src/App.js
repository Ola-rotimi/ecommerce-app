import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.route";
import Home from "./routes/home/home.route";
import Navigation from "./routes/navigation/navigation.route";
import Shop from "./routes/shop/shop.route";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;

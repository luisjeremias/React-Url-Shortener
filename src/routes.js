import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from './pages/Home'
import Links from './pages/Links'
import Error from "./pages/Error";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/links" element={<Links />} />
        <Route exact path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default RoutesApp;
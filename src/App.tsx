import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Search from "./components/Search";
import Notifications from "./components/Notifications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<ProtectedRoutes user={"hoge"} />}>
          <Route path="/search" element={<Search />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

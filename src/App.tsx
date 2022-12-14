import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Search from "./components/Search";
import Notifications from "./components/Notifications";
import ProfilePage from "./pages/Profile";
import UserBook from "./pages/Profile/UserBook";
import Sign from "./components/Sign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Sign isLogin />} />
          <Route path="/signup" element={<Sign />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile/me" element={<ProfilePage isMine />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/book/:bookId" element={<UserBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

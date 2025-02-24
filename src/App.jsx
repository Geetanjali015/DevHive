import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AboutPage from "./pages/AboutPage";
import MainLayout from "./layouts/MainLayout"; // Import the layout
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/Signup";
import ProfilePage from "./pages/ProfilePage";
import ResumeColumn from "./pages/Resume";
import DevHiveMatch from "./pages/DevHiveMatch";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes inside MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="resume" element={<ResumeColumn />} />
          <Route path="matchES" element={<DevHiveMatch />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

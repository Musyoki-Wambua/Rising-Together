import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";
import NavBar from "./components/NavBar";
import WhoWeAre from "./components/WhoWeAre";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import DonationForm from "./components/DonationForm";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Organization from "./components/Organization";
import OrganizationDetails from "./components/OrganizationDetails";
import Profile from "./components/Profile";
import Review from "./components/Review";
import SignupPage from "./components/SignupPage";
 

function App() {
  return (
     

    <div className="w-screen h-screen">
      <Router>
        <NavBar />
        
        <Routes>          
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Organization" element={<Organization />} />        
          <Route path="/login" element={<Login />} />
          <Route path="/organizationDetails/:id" element={<OrganizationDetails />} />
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
        {/* <Home /> */}
      
      </Router>
    </div>
    
  );
}

export default App;

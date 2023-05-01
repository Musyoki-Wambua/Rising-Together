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
import Help from "./components/Help";
 import Insight from "./components/Insight";
import ChatBox from "./components/ChatBox";

function App() {
  return (
     

    <div className="w-screen h-screen">
      <Router>
       
        
        <Routes>        
        <Route path="/Insight" element={<Insight />} />  
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Organizations" element={<Organization />} />        
          <Route path="/login" element={<Login />} />
          <Route path="/WhoweAre" element={<WhoWeAre />} />
          <Route path="/organizationDetails/:id" element={<OrganizationDetails />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route path="/Help" element={<Help />} />

          <Route path="/" element={<LandingPage />} />
          <Route path="/WhoWeAre" element={<WhoWeAre />} />
          <Route path="/GetInvolved" element={<Profile />} />
          <Route path="/ChatBox" element={<ChatBox />} />
        </Routes>
        {/* <Home /> */}      
      </Router>
    </div>
    
  );
}

export default App;

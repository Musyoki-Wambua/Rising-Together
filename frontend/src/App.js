import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";
import WhoWeAre from "./components/WhoWeAre";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Organization from "./components/Organization";
import OrganizationDetails from "./components/OrganizationDetails";
import Profile from "./components/Profile";
import SignupPage from "./components/SignupPage";
import Help from "./components/Help";
 import Insight from "./components/Insight";
 import OrganisationForm from "./components/OrganisationForm";
 import ChatBox from "./components/ChatBox";

function App() {
  return (
     

    <div className="w-screen h-screen">
     
      <Router>
      <div className="fixed bottom-0 right-0 m-4">
  <ChatBox />
</div>
        
        <Routes>        
        <Route path="/Insight" element={<Insight />} />  
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Organization" element={<Organization />} />        
          <Route path="/login" element={<Login />} />
          <Route path="/organizationDetails/:id" element={<OrganizationDetails />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/WhoWeAre" element={<WhoWeAre />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/AddOrg" element={<OrganisationForm />} />
        </Routes>
        {/* <Home /> */}
      
      </Router>
    </div>
    
  );
}

export default App;
import React from "react";
 
import Card from "./Card.js";
import donate from "./Images/donate.png"
import login from "./Images/login.png"
import organizations from "./Images/organizations.png"
import imapacthub from "./Images/impact.png"
import landing from "./Images/landing.png"
import NavBar from "../NavBar/NavBar.js";
import search from "./Images/search.png";
// import gogin_getstarted from "./img/gogin_getstarted.png";
// import home from "./img/home.png";
// import addmeme from "./img/addmeme.png";
// import mymeme from "./img/mymeme.png";
// import searchmeme from "./img/searchmeme.png";
// import deletemem from "./img/deletemem.png";
const Help = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="fixed bottom-0 right-0 m-4">
 
</div>
      {/* <NavBar/> */}
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-4xl font-bold text-center mt-8 mb-12">
          How to Use Our App
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card title="Register/Login">
  <img src={login} alt="Register/Login" className="w-full h-48 object-cover" />
  <p className="mt-4">
    To get started, register a new account or login with your existing one.
  </p>
</Card>

          <Card
            title="View Memes">
             <img src={landing} alt="View Memes" className="w-full h-48 object-cover" />
            <p className="mt-4">
              Once you're logged in, you'll be taken to the home page where you
              can view details about our website
            </p>
          </Card>
          <Card
            title="Add Memes">
             <img src={imapacthub} alt="View Memes" className="w-full h-48 object-cover" />
            <p className="mt-4">
              To view all the available NGOS 
            </p>
          </Card>
          <Card
            title="My Memes">
            <img src={organizations}alt="View Memes" className="w-full h-48 object-cover" />
            <p className="mt-4">
              To view all the Organizations, click on the "Organizations" button.
            </p>
          </Card>
          <Card
            title="Search Memes">
            <img src={search} alt="View Memes" className="w-full h-48 object-cover" />
            <p className="mt-4">
              If you're looking for a specific NGO, simply use the search bar and
              enter the Name of the NGO you're looking for.
            </p>
          </Card>
          <Card
            title="Remove Me">
            <img src={donate} alt="View Memes" className="w-full h-48 object-cover" />
            <p className="mt-4">
              If you wish to Donate, simply click on the donate button fill the form and your donation will recived
               
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Help;
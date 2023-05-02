
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ChatBox from "./ChatBox";
import NavBar from "./NavBar";
const Organization = () => {
  const [organization, setOrganization] = useState([]);
  const [Loading, setIsLoading] = useState(true);
  const [organizations, setOrganizations] = useState();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const filteredOrganizations = organization.filter((org) =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  useEffect(() => {
    fetch(`https://rising-together-ni0b.onrender.com/organizations`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.name);
        setOrganization(data);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://rising-together-ni0b.onrender.com/organizations/${id}`, { method: "DELETE" })
      .then(() => {
        const updatedOrgs = organization.filter((org) => org.id !== id);
        setOrganization(updatedOrgs);
      })
      .catch((error) => console.error(error));
  };

  if (Loading) {
    return (
      <div class=" bg-gray-900 flex items-center justify-center w-full h-full">
      <div class="flex justify-center items-center space-x-1 text-sm  text-gray-700">
         
            <svg fill='none' class="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
              <path clip-rule='evenodd'
                d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                fill='currentColor' fill-rule='evenodd' />
            </svg>
    
         
        <div className="text-white text-2xl">Loading ...</div>
      </div>
    </div>
    );
  }
 
  function AdminButton({ id }) {
    const location = useLocation();
    const role = new URLSearchParams(location.search).get("role");

    if (role === "admin") {
      return (
        <div>
          <button class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
            <img className="h-8"src="https://img.icons8.com/?size=512&id=102315&format=png"/>
            Delete
          </button>
        </div>
      );
    } else {
      return null;
    }
  }
  function EditeButton({ id }) {
    const location = useLocation();
    const role = new URLSearchParams(location.search).get("role");

    if (role === "admin") {
      return (
        <div>
          <button class=" inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
            Edite
          </button>
        </div>
      );
    } else {
      return null;
    }
  }
   

  function Editename({ id }) {
    const location = useLocation();
    const role = new URLSearchParams(location.search).get("role");

    if (role === "admin") {
      return (
        <div>
          <button class=" inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
            Edite
          </button>
        </div>
      );
    } else {
      return null;
    }
  }
  
  
  
  const OrganizationCard = ({ organization, id }) => {
    const location = useLocation();
    const isUser = location.search.indexOf("role=admin") === -1;
    const role = isUser ? "user" : "admin";
    return (
      <div className="mt-6 w-full   md:w-full h-full p-">
        <div className=" ">
        <div className="fixed bottom-0 right-0 m-4">
  <ChatBox />
</div>
          <a
            href="#"
            className="mt- h-full w-full  group relative block bg-black"
          >
            <img
              alt="Developer"
              src={organization.image_url}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className=" relative p-4 sm:p-6 lg:p-8">
              <div className="text-white translate-y-11  mt-96  transition-all group-hover:translate-y-0 group-hover:opacity-100  ">
                <p className="text-gray-600  text-sm">.</p>

                <p className="text-gray-400  text- mt-14">
                  {organization.location}
                </p>

                <p className="text-4xl font-serif mt-">{organization.name}</p>

                <div className="mt-4 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <Link to={`/organizationDetails/${id}?role=${role}`}>
                    <button className="bg-green-700 w-full h-8 text-xl text-white">
                      Donate 
                    </button>
                  </Link>
                </div>
                <div className="mt-4 inline-flex translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <button
                    className=" text-xl text-red"
                    onClick={() => handleDelete(organization.id)}
                  >
                    {" "}
                    <AdminButton
                      className="w-full "
                      onClick={() => handleDelete(organization.id)}
                    />
                  </button>
                  <button className="ml-9">
                    {/* <EditeButton /> */}
                  </button>
                  {/* <AdminButton onClick={() => handleDelete(organization.id)} /> */}
                </div>
              </div>
            </div>
          </a>{" "}
        </div>
      </div>
    );
  };
  return (
    <div>
      <NavBar/>
      
      <div className=" mt-4 w-full">
      <div className="flex items-center justify-center mb-5">
        <input
          type="text"
          placeholder="Search for organization"
          value={searchTerm}
          onChange={handleSearch}
          className="border-green-700 border-2 rounded-full py-2 px-4 w-2/3"
        />
      </div>
    <div className=" grid grid-cols-2 gap-4">
     
    {filteredOrganizations.map((org,index)=> (
        <div className="cursor-pointer rounded-md p-3 bg-white" key={index}>
          <OrganizationCard organization={org} id={index} />
        </div>
      ))}
    </div>
    
    </div>
    </div>
  );
};
export default Organization;

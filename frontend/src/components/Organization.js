
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
    fetch(`http://localhost:3000/organizations`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.name);
        setOrganization(data);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/organizations/${id}`, { method: "DELETE" })
      .then(() => {
        const updatedOrgs = organization.filter((org) => org.id !== id);
        setOrganization(updatedOrgs);
      })
      .catch((error) => console.error(error));
  };

  if (Loading) {
    return (
      <body class="w-full h-full bg-gray-900 text-white grid grid-cols-1 grid-rows-1 place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-arrow-repeat animate-spin"
          viewBox="0 0 16 16"
        >
          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
          <path
            fill-rule="evenodd"
            d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
          />
        </svg>
      </body>
    );
  }
 
  function AdminButton({ id }) {
    const location = useLocation();
    const role = new URLSearchParams(location.search).get("role");

    if (role === "admin") {
      return (
        <div>
          <button class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
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

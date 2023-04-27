import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Organization = () => {
  const [organization, setOrganization] = useState([]);
  const [Loading, setIsLoading] = useState(true);
  const [organizations, setOrganizations] = useState();

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
        if (organizations) {
          const updateOrganizations = organizations.filter(
            (organization) => organization.id !== id
          );
          setOrganizations(updateOrganizations);
        }
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
      return <button className="bg-green-700 w-full h-8 text-xl text-white">Delete</button>;
    } else {
      return null;
    }
  }

  const OrganizationCard = ({ organization, id }) => {
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
                  <Link to={`/organizationDetails/${id}`}>
                    <button className="bg-green-700 w-full h-8 text-xl text-white">
                      Donate
                    </button>
                  </Link>
                </div>
                <div className="mt-4 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <button
                    className=" text-xl text-red"
                    onClick={() => handleDelete(organization.id)}
                  >
                    {" "}
                    <AdminButton
                      onClick={() => handleDelete(organization.id)}
                    />
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
    <div className="mt-8 grid grid-cols-2 gap-4">
      {organization.map((org, index) => (
        <div className="cursor-pointer rounded-md p-3 bg-white" key={index}>
          <OrganizationCard organization={org} id={index} />
        </div>
      ))}
    </div>
  );
};
export default Organization;

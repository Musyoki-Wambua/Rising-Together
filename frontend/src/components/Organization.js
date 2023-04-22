
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 


const Organization = () => {
  const [organization, setOrganization] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/643c58ecace6f33a220c83d1/latest")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.record.name );
         
        setOrganization(data.record);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
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

  const OrganizationCard = ({ organization, id}) => {
    return (<Link to={`/organizationDetails/${id}`}>
      <div className="mt-6 w-full   md:w-full h-full p-">
          <div className=" ">
            <a
              href="#"
               
              className="mt- h-full w-full  group relative block bg-black"
            >
              {organization.image_url.length > 0 && (
                <img
                  alt="Developer"
                  src={organization.image_url}
                  
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />
              )}

              <div className=" relative p-4 sm:p-6 lg:p-8">
                <div className="text-white translate-y-11  mt-96  transition-all group-hover:translate-y-0 group-hover:opacity-100  ">
                  <p className="text-gray-600  text-sm">.</p>
                  {organization.location.length > 0 && (
                    <p className="text-gray-400  text- mt-14">
                      {organization.location}
                    </p>
                  )}
                  {organization.name.length > 0 && (
                    <p className="text-4xl font-serif mt-">
                      {organization.name}
                    </p>
                  )}
                  <div className="mt-4 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  
        <Link to={`/organizationDetails/${organization.id}`}>
          <button className="bg-green-700 w-full h-8 text-xl text-white">
            Donate
          </button>
        </Link>
       
                  </div>
                </div>
              </div>
            </a>{" "}
          </div>
        </div>   
       
      </Link>
    );
  };
  return (
    <div className="mt-8 grid grid-cols-2 gap-4">
  {organization.map((org, index) => (
    <div className="cursor-pointer rounded-md p-3 bg-white  " key={index}>
      <OrganizationCard organization={org} id={index}/>
    </div>
  ))}
</div>

  );
};
export default Organization;


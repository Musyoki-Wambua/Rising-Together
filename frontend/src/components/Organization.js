
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 


const Organization = () => {
  const [organization, setOrganization] = useState([]);
 
  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/643c58ecace6f33a220c83d1/latest")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.record.name );
         
        setOrganization(data.record);

      });
  }, []);

   

  const OrganizationCard = ({ organization, id}) => {
    return (<Link to={`/organizationDetails/${id}`}>
      <div className="mt-6 w-full  md:w-full p-">
          <div className="h-full w-full ">
            <a
              href="#"
               
              className="mt- h-full w-full group relative block bg-black"
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
    <div className="cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200" key={index}>
      <OrganizationCard organization={org} id={index}/>
    </div>
  ))}
</div>

  );
};
export default Organization;


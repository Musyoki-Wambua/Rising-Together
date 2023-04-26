import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DonationForm from "./DonationForm";
import Review from "./Review";
import Profile from "./Profile";
function OrganizationDetails() {
  let param = useParams();
  console.log(param.id);
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [randomNumber2] = useState(Math.floor(Math.random() * 18) + 2006);

  const [organization, setOrganization] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(" http://localhost:3000/organizations")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.name);

        setOrganization(data);
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
  //  src={organization.image_url}

  const DetailedOrganization = ({ organization }) => {
    const handleButtonClick = () => {
      setIsCardVisible(!isCardVisible);
    };
    const [isCardVisible, setIsCardVisible] = useState(false);
    
    const Card = () => {
      return (
        <div>
          <div className="fixed top-0 left-0  bg-black opacity-50 z-10"></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-xl   z-20 p-4">
            <DonationForm />
          </div>
        </div>
      );
    };
    const Volunteer =()=>{
      return (
        <div>
          <div className="fixed top-0 left-0  bg-black opacity-50 z-10"></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-xl   z-20 p-4"> 
        <Profile/>
        </div>
        </div>
      )
    }
    return (
      <div className="detailed-page ">
        {/* <DonationForm/> */}
        <div className="bg-green-50 ">
          <div className="mt- mx-auto  p-4 flex   ">
            <div className="grid grid-cols-2 ">
              <div className="mt-20   ">
                <h1 className="text-5xl leading-loose font-serif ml-32   font-bold ">
                  {organization.name}
                </h1>
                <p className="ml-32 mt-6 text-xl ">
                  {organization.description}
                </p>

                <div className=" mt-8 ml-32 mx-auto justify-center">
                  {" "}
                  <button
                    className="bg-green-800 w-32 h-11 text-white text-bold hover:bg-green-700 font-sarif"
                    onClick={handleButtonClick}
                  >
                    Give Now
                  </button>
                  {isCardVisible && <Card />}
                </div>
              </div>

              <div className="">
                <img
                  style={{ width: "80vh", height: "45vh" }}
                  className="     "
                  src={organization.image_url}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20  ">
          <div className="ml-8 mx-auto  p-4 flex   ">
            <div className="grid grid-cols-2 ">
              <div>
                {/* <video width="750" height="450" controls>
  <source src={`${organization.video_url}`}   />
  Your browser does not support the video tag.
</video> */}
                <iframe
                  width="750"
                  height="450"
                  src={`${organization.video_url}`}
                  title="This is Doctors Without Borders/Médecins Sans Frontières (MSF)"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="mr-44">
                <h1 className="text-3xl font-serif font-bold italic">
                  {" "}
                  Unveiling the Mystery of Selfhood: A Comprehensive Look into
                  Who We Are and How We Define Ourselves{" "}
                </h1>
                <p className=" mt-9 text-xl font-serif ">{organization.info}</p>
                <div className="w-full h-full mt-9 ">
                  <Review />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ width: "170vh", height: "47vh" }}
          className="mx-auto justify-center bg-green-50 mt-12  "
        >
          <div className="mt- mx-auto  p-4 flex   ">
            <div className="grid grid-cols-2 ">
              <div className="mt-20   ">
                <h1 className="text-4xl   font-serif ml-24   font-bold ">
                  This program has delivered ksh {randomNumber}M+ since{" "}
                  {randomNumber2}
                </h1>
                <p className=" font-serif ml-24  mt-6 text-xl ">
                  Join our mission to make a positive impact! Volunteer with us
                  and help make a difference in the lives of those in need.
                  Whether you have a few hours to spare or are looking for a
                  more long-term commitment, we have opportunities available for
                  everyone. Sign up today and be a part of something meaningful.
                </p>

                <div className=" mt-8 ml-24 mx-auto justify-center">
                  {" "}
                  <button className="bg-green-800 w-32 h-11 text-white text-bold hover:bg-green-700 font-sarif"  >
                    {" "}
                    {/* onClick={handleButtonClick} */}
                    VOLUNTEER
                  </button>
                  {/* {isCardVisible && <Volunteer />} */}
                </div>
              </div>

              <div className="">
                <img
                  style={{ width: "100vh", height: "45vh" }}
                  className="     "
                  src="https://www.pngmart.com/files/Africa-PNG-Isolated-HD.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <DetailedOrganization organization={organization[param.id]} />
    </div>
  );
}
export default OrganizationDetails;

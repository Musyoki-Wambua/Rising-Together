import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DonationForm from "./DonationForm";
import Review from "../Review/Review";
import Profile from "../Profile/Profile";
import NavBar from "./NavBar";
function OrganizationDetails() {
  let param = useParams();
  const { id } = useParams();
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
  }, [id]);

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

  function DeleteComment({ id }) {
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
  function Comments({ organizationName }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/reviews")
        .then((response) => response.json())
        .then((data) => {
          const filteredData = data.filter(
            (review) => review.organization_name === organizationName
          );
          const shuffledData = filteredData.sort(() => 0.5 - Math.random());
          const firstThreeReviews = shuffledData.slice(0, 3);
          setReviews(firstThreeReviews);
        })
        .catch((error) => {
          console.error("Error fetching reviews:", error);
        });
    }, [organizationName]);

    const handleDelete = (reviewId) => {
      fetch(`http://localhost:3000/reviews/${reviewId}`, {
        method: "DELETE",
      })
        .then(() => {
          setReviews((prevReviews) =>
            prevReviews.filter((review) => review.id !== reviewId)
          );
        })
        .catch((error) => {
          console.error("Error deleting review:", error);
        });
    };

    return (
      <div className="flex">
        {reviews.map((review) => (
          <div
            key={review.id}
            class="flex w-96 ml-40 mt-20 bg-green-200 justify-center relative top-1/3"
          >
            <div class="relative grid ml-5 grid-cols-1 bg-green-100 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
              <div class="relative flex gap-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
                  class="relative rounded-full -top-8 -mb-4 bg-white border h-20 w-20"
                  alt=""
                  loading="lazy"
                />
                <div class="flex flex-col w-full">
                  <div class="flex flex-row justify-between">
                    <h2 class="relative text-xl whitespace-nowrap text-green-600 truncate overflow-hidden">
                      {review.username}
                    </h2>
                    <button
                      onClick={() => handleDelete(review.id)}
                      class="text-gray-500 text-xl"
                    >
                      <DeleteComment />
                    </button>
                  </div>
                  <p class="text-gray-400 text-green-800 text-sm">
                    {review.organization_name}
                  </p>
                </div>
              </div>
              <p class="-mt-4 text-gray-600">{review.comments}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  //  src={organization.image_url}
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
            Edit
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
    const [name, setName] = useState("");

    const handleUpdateInfo = async () => {
      const newInfo = prompt("Enter the new info of the organization:");
      if (newInfo) {
        const response = await fetch(`http://localhost:3000/organizations/1`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ info: newInfo }),
        });
        if (response.ok) {
          alert("Organization info updated successfully!");
        } else {
          alert("Failed to update organization info.");
        }
      }
    };
    

    if (role === "admin") {
      return (
        <div>
          <button
            className="flex items-center ml-6 justify-center p-2 border border-green-500 text-white shadow rounded-lg"
            onClick={handleUpdateInfo}
          >
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>
          </button>
          <span className="ml-2">{name}</span>
        </div>
      );
    } else {
      return null;
    }
  }

  function EditeInfo({ id }) {
  const location = useLocation();
  const role = new URLSearchParams(location.search).get("role");

  const [orgInfo, setOrgInfo] = useState({
    id: 96,
    name: "Doctors Without Borders",
    description:
      "Doctors Without Borders is an international humanitarian organization that provides medical care to people affected by conflict, epidemics, and disasters.",
    location: "Geneva, Switzerland",
    year_established: 2021,
    image_url:
      "https://assets.tiltify.com/uploads/cause/image/21/doctors-without-borders-msf-image-1587513225216.jpg",
    video_url: "https://www.youtube.com/embed/okrkVJRfOuk",
    info: "Doctors Without Borders, also known as Médecins Sans Frontières (MSF), is an international humanitarian organization that provides medical aid to people in crisis situations around the world. The organization was founded in 1971 by a group of French doctors and journalists who wanted to provide emergency medical assistance to people affected by war, natural disasters, and other humanitarian crises.",
    contact: "+41-001-675-324",
    user_id: 2,
    created_at: "2023-04-27T20:37:18.127Z",
    updated_at: "2023-04-27T20:37:18.127Z",
  });

  const handleClick = () => {
    const newName = prompt("Enter new organization name:");
    const newDescription = prompt("Enter new organization description:");

    if (newName && newDescription) {
      setOrgInfo((prevOrgInfo) => ({
        ...prevOrgInfo,
        name: newName,
        description: newDescription,
      }));

      // Make API call to update organization info
      fetch(`http://localhost:3000/organizations/1`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newName, description: newDescription }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
  };

  if (role === "admin") {
    return (
      <div>
        <button
          className="flex w-9 items-center justify-center p-2 border border-green-500 text-white shadow rounded-lg"
          onClick={handleClick}
        >
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </div>
        </button>
      </div>
    );
  } else {
    return null;
  }
}


  function Editepicture({ id }) {
    const location = useLocation();
    const role = new URLSearchParams(location.search).get("role");
    const [imageUrl, setImageUrl] = useState("");

    const handleInputChange = (event) => {
      setImageUrl(event.target.value);
    };

    const handleSubmit = () => {
      fetch(`http://localhost:3000/organizations/1`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image_url: imageUrl }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    };

    if (role === "admin") {
      return (
        <div>
          <button
            class="flex items-center justify-center flex-1 ml-8  p-2 bg-green-500 text-white shadow rounded-full"
            onClick={() => {
              const imageUrl = prompt("Enter image URL:");
              if (imageUrl) {
                setImageUrl(imageUrl);
                handleSubmit();
              }
            }}
          >
            <div class="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
          </button>
        </div>
      );
    } else {
      return null;
    }
  }

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
    const Volunteer = () => {
      return (
        <div>
          <div className="fixed top-0 left-0  bg-black opacity-50 z-10"></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-xl   z-20 p-4">
            <Profile />
          </div>
        </div>
      );
    };
    return (
      <div className="detailed-page ">
        {/* <DonationForm/> */}
        <div className="bg-green-50 ">
          <div className="mt- mx-auto  p-4 flex   ">
            <div className="grid grid-cols-2 ">
              <div className="mt-20   ">
                <h1 className="text-5xl leading-loose flex font-serif ml-32   font-bold ">
                  {organization.name}
                  <EditeInfo/>{" "}
                 
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

              <div className="flex">
                <img
                  style={{ width: "80vh", height: "45vh" }}
                  className="     "
                  src={organization.image_url}
                />
                <Editepicture />
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
                <h1 className="text-3xl flex font-serif font-bold italic">
                  {" "}
                  Unveiling the Mystery of Selfhood: A Comprehensive Look into
                  Who We Are and How We Define Ourselves{" "}
                  <Editename />
                </h1>

                <p className=" mt-9 text-xl flex font-serif ">
                  {" "}
                  {organization.info}
               
                </p>
                <div className="w-full h-full mt-9 ">
                  {" "}
                  {/* <Review /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Comments organizationName={organization.name} />
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
                  <button className="bg-green-800 w-32 h-11 text-white text-bold hover:bg-green-700 font-sarif">
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
      <NavBar />
      <DetailedOrganization organization={organization[param.id]} />
    </div>
  );
}
export default OrganizationDetails;

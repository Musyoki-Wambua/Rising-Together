import React, { useEffect, useState } from "react";
import ChatBox from "./ChatBox";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
function HomePage() {
  const [ngos, setNGOs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/organizations");
      const data = await response.json();
      setNGOs(data);
      console.log(data);
      setIsLoading(false);
    }

    fetchData();
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

  function AdminButton() {
    const location = useLocation();
    const role = new URLSearchParams(location.search).get("role");

    if (role === "admin") {
      return (
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Admin Button
        </button>
      );
    } else {
      return null;
    }
  }
  const targetedNGOId = 1;
  const targetedNGO = ngos.find((ngo) => ngo.id === targetedNGOId);

  const targetedNGOId2 = 2;
  const targetedNGO2 = ngos.find((ngo) => ngo.id === targetedNGOId2);

  const targetedNGOId3 = 3;
  const targetedNGO3 = ngos.find((ngo) => ngo.id === targetedNGOId3);
  const targetedNGOId4 = 4;
  const targetedNGO4 = ngos.find((ngo) => ngo.id === targetedNGOId4);
  const targetedNGOId5 = 5;
  const targetedNGO5 = ngos.find((ngo) => ngo.id === targetedNGOId5);

  function MyComponent() {
    const location = useLocation();
    const isUser = location.search.indexOf("role=admin") === -1;
    const role = isUser ? "user" : "admin";

    return (
      <Link to={`/Organization?role=${role}`}>
        <button className="bg-green-600 w-32 h-11 text-white text-bold hover:bg-green-800">
          {role === "admin" ? "Impact Hub " : "Impact Hub"}
        </button>
      </Link>
    );
  }
  return (
    <section className="font-serif">
      {/* <AdminButton /> */} <NavBar/>
      <div className="font-serif flex flex-wrap">
        <div className="mt-6 w-full  md:w-1/2 p-">
          <div className="h-52">
            <a
              href="#"
              style={{ width: "", height: "67.6vh" }}
              className="mt- group relative block bg-black"
            >
              {ngos.length > 0 && (
                <img
                  alt="Developer"
                  src={`${ngos[0].image_url}`}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />
              )}

              <div className=" relative p-4 sm:p-6 lg:p-8">
                <div className="text-white translate-y-11  mt-96  transition-all group-hover:translate-y-0 group-hover:opacity-100  ">
                  <p className="text-gray-600  text-sm">.</p>
                  {ngos.length > 0 && (
                    <p className="text-gray-400  text- mt-14">
                      {ngos[0].location}
                    </p>
                  )}
                  {ngos.length > 0 && (
                    <p className="text-4xl tec font-serif mt-">
                      {ngos[0].name}
                    </p>
                  )}
                  <div className="mt-4 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    {ngos.length > 0 && (
                      <Link to={`/organizationDetails/${ngos[0].id}`}>
                        <button className="bg-green-700 w-full h-8 text-xl text-white">
                          Donate
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </a>{" "}
          </div>
        </div>

        {/* right content  */}
        <div className="mt-2   md:w-1/2 p-4 flex   ">
          <div className="grid grid-cols-2 gap-1 gap-x-6">
            <div className="">
              <a
                href="#"
                style={{ width: "50vh ", height: "33.6vh" }}
                className=" group relative block bg-black"
              >
                {ngos.length > 0 && (
                  <img
                    alt="Developer"
                    src={`${ngos[1].image_url}`}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  />
                )}

                <div className=" relative p-4 sm:p-6 lg:p-8">
                  <div className="mt- sm:mt- lg:mt-44">
                    <div className="text-white translate-y-11   transition-all group-hover:translate-y-0 group-hover:opacity-100  ">
                      {ngos.length > 0 && (
                        <p className="text-gray-400  text-sm mt-20">
                          {ngos[1].location}
                        </p>
                      )}
                      {ngos.length > 0 && (
                        <p className="text-lg mt-">{ngos[1].name}</p>
                      )}
                      <div className="mt-4 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <button className="bg-green-700 w-full h-8 text-xl    text-white">
                          Donte
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="">
            <div className="fixed bottom-0 right-0 m-4">
 
</div>
              <a
                href="#"
                style={{ width: "50vh ", height: "33.6vh" }}
                className=" group relative block bg-black"
              >
                {ngos.length > 0 && (
                  <img
                    alt="Developer"
                    src={`${ngos[2].image_url}`}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  />
                )}

                <div className=" relative p-4 sm:p-6 lg:p-8">
                  <div className="mt- sm:mt- lg:mt-44">
                    <div className="text-white translate-y-11   transition-all group-hover:translate-y-0 group-hover:opacity-100  ">
                      {ngos.length > 0 && (
                        <p className="text-gray-400  text-sm mt-20">
                          {ngos[2].location}
                        </p>
                      )}
                      {targetedNGO3 && (
                        <p className="text-lg mt-">{targetedNGO3.name}</p>
                      )}
                      <div className="mt-4 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <button className="bg-green-700 w-full h-8 text-xl    text-white">
                          Donte
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>{" "}
            </div>
            <div className=" ">
              <a
                href="#"
                style={{ width: "50vh ", height: "33.6vh" }}
                className=" group relative block bg-black"
              >
                {ngos.length > 0 && (
                  <img
                    alt="Developer"
                    src={`${ngos[3].image_url}`}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  />
                )}

                <div className=" relative p-4 sm:p-6 lg:p-8">
                  <div className="mt- sm:mt- lg:mt-44">
                    <div className="text-white translate-y-11   transition-all group-hover:translate-y-0 group-hover:opacity-100  ">
                      {targetedNGO4 && (
                        <p className="text-gray-400  text-sm mt-20">
                          {targetedNGO4.location}
                        </p>
                      )}
                      {targetedNGO4 && (
                        <p className="text-lg mt-">{targetedNGO4.name}</p>
                      )}
                      <div className="mt-4 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <button className="bg-green-700 w-full h-8 text-xl    text-white">
                          Donte
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>{" "}
            </div>
            <div>
              <a
                href="#"
                style={{ width: "50vh ", height: "33.6vh" }}
                className=" group relative block bg-black"
              >
                {ngos.length > 0 && (
                  <img
                    alt="Developer"
                    src={`${ngos[4].image_url}`}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  />
                )}

                <div className=" relative p-4 sm:p-6 lg:p-8">
                  <div className="mt- sm:mt- lg:mt-44">
                    <div className="text-white translate-y-11   transition-all group-hover:translate-y-0 group-hover:opacity-100  ">
                      {targetedNGO5 && (
                        <p className="text-gray-400  text-sm mt-20">
                          {targetedNGO5.location}
                        </p>
                      )}
                      {targetedNGO5 && (
                        <p className="text-lg mt-">{targetedNGO5.name}</p>
                      )}
                      <div className="mt-4 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <button className="bg-green-700 w-full h-8 text-xl    text-white">
                          Donte
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* bottom of top cards */}
      <div>
        <h1 className="text-center text-green-800 text-4xl mt-8">
          How it works
        </h1>
      </div>
      <div
        style={{ width: "150vh", height: "" }}
        className="mt-9 text-center mx-auto justify-center flex gap-1 gap-x-6"
      >
        <a
          class="relative flex items-start justify-between border border-gray-300 p-4 shadow-xl sm:p-6 lg:p-8"
          href="#"
        >
          <div class="pt-4 text-gray-500">
            <img
              class="h-8 w-8 mx-auto justify-center sm:h-10 sm:w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              src="https://img.icons8.com/color/256/green-arrow.png"
            ></img>

            <h3 class="mt-8 text-base   text-gray-900  ">
              Organizations worldwide seek to join Raising Together in order to
              obtain greater financial support, enhance their abilities, and
              establish valuable relationships.
            </h3>

            <p class="  hidden text-green-700 mt-9 text-sm sm:block">
              NONPROFITS
            </p>
          </div>
        </a>
        {/* second */}
        <a
          class="relative flex items-start justify-between   border border-gray-300 p-4 shadow-xl sm:p-6 lg:p-8"
          href="#"
        >
          <div class="pt-4 text-gray-500">
            <img
              class="h-8 w-8 mx-auto justify-center sm:h-10 sm:w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              src="https://img.icons8.com/external-wanicon-two-tone-wanicon/256/external-gift-award-and-success-wanicon-two-tone-wanicon.png"
            ></img>

            <h3 class="mt-8 text-base   text-gray-900  ">
              Individuals contribute to their preferred initiatives through
              Raising Together, receiving updates on the progress of their
              donations and the impact of reputable organizations.{" "}
            </h3>

            <p class="  hidden text-green-700 mt-9 text-sm sm:block">DONERS</p>
          </div>
        </a>
        {/* 3rd */}
        <a
          class="relative flex items-start justify-between   border border-gray-300 p-4 shadow-xl sm:p-6 lg:p-8"
          href="#"
        >
          <div class="pt-4 text-gray-500">
            <img
              class="h-8 w-8 mx-auto justify-center sm:h-10 sm:w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              src="https://img.icons8.com/external-others-pike-picture/256/external-Closed-Business-crisis-others-pike-picture.png"
            ></img>

            <h3 class="mt-8 text-base   text-gray-900  ">
              Organizations worldwide seek to partner with Raising Together to
              receive increased financial support, enhance their capabilities,
              and establish valuable relationships.
            </h3>

            <p class="  hidden text-green-700 mt-9 text-sm sm:block">
              COMPANIES
            </p>
          </div>
        </a>

        {/* fourth  */}

        <a
          class="relative flex items-start justify-between   border border-gray-300 p-4 shadow-xl sm:p-6 lg:p-8"
          href="#"
        >
          <div class="pt-4 text-gray-500">
            <img
              class="h-8 w-8 mx-auto justify-center sm:h-10 sm:w-10"
              src="https://img.icons8.com/external-wanicon-two-tone-wanicon/256/external-earth-nature-wanicon-two-tone-wanicon.png"
            ></img>

            <h3 class="mt-8 text-base   text-gray-900  ">
              Nonprofit organizations globally seek to partner with Raising
              Together to secure increased financial backing, bolster their
              capabilities, and cultivate meaningful partnerships.{" "}
            </h3>

            <p class="  hidden text-green-700 mt-9 text-sm sm:block">
              OUR IMPACT
            </p>
          </div>
        </a>
      </div>

      <div className="mt-20 mx-auto  p-4 flex   ">
        <div className="grid grid-cols-2 ">
          <div className="mt-40 tet-center">
            <h1 className="text-5xl ml-32 text-green-800 font-bold text-center">
              Together Fund
            </h1>
            <p className="ml-32 mt-11 text-xl text-center">
              Raising Together is a charity website that connects people and
              organizations to donate and fundraise for various causes,
              empowering individuals to make a positive impact in the world.
            </p>

            <div className="text-center mt-8 ml-32 mx-auto justify-center">
              {" "}
              {/* <Link to={`/Organization?role=${role}`}>
      <button className="bg-green-600 w-32 h-11 text-white text-bold hover:bg-green-800">
        {role === "admin" ? "Impact Hub (admin)" : "Impact Hub"}
      </button>
    </Link>
                       
              <Link to={`/Organization?role=${"admin"}`}>
              <button className="bg-green-600 w-32 h-11 text-white text-bold hover:bg-green-800"> Impact Hub
 </button></Link> */}{" "}
              <MyComponent />
            </div>
          </div>

          <div className="">
            <img
              style={{ width: "100vh", height: "55vh" }}
              className="     "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Continents.svg/1920px-Continents.svg.png?20061115170447"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomePage;
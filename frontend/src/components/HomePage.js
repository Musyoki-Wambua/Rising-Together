import React, { useEffect, useState } from "react";
function HomePage() {
  const [ngos, setNGOs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.jsonbin.io/v3/b/643c58ecace6f33a220c83d1/latest"
      );
      const data = await response.json();
      setNGOs(data.record);
    }

    fetchData();
  }, []);
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

  return (
    <section className="font-serif">
      <div className="font-serif flex flex-wrap">
        <div className="mt-6 w-full  md:w-1/2 p-">
          <div className="h-52">
            <a
              href="#"
              style={{ width: "", height: "67.6vh" }}
              className="mt- group relative block bg-black"
            >
              {targetedNGO && (
                <img
                  alt="Developer"
                  src={`${targetedNGO.image_url}`}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />
              )}

              <div className=" relative p-4 sm:p-6 lg:p-8">
                <div className="text-white translate-y-11  mt-96  transition-all group-hover:translate-y-0 group-hover:opacity-100  ">
                  <p className="text-gray-600  text-sm">.</p>
                  {targetedNGO && (
                    <p className="text-gray-400  text- mt-14">
                      {targetedNGO.location}
                    </p>
                  )}
                  {targetedNGO && (
                    <p className="text-4xl font-serif mt-">
                      {targetedNGO.name}
                    </p>
                  )}
                  <div className="mt-4 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <button className="bg-green-700 w-full h-8 text-xl    text-white">
                      Donte
                    </button>
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
                <img
                  alt="Developer"
                  src="https:images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className=" relative p-4 sm:p-6 lg:p-8">
                  <div className="mt- sm:mt- lg:mt-44">
                    <div className="text-white translate-y-11   transition-all group-hover:translate-y-0 group-hover:opacity-100  ">
                      {targetedNGO2 && (
                        <p className="text-gray-400  text-sm mt-20">
                          {targetedNGO2.location}
                        </p>
                      )}
                      {targetedNGO2 && (
                        <p className="text-lg mt-">{targetedNGO2.name}</p>
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
              <a
                href="#"
                style={{ width: "50vh ", height: "33.6vh" }}
                className=" group relative block bg-black"
              >
                <img
                  alt="Developer"
                  src="https:images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className=" relative p-4 sm:p-6 lg:p-8">
                  <div className="mt- sm:mt- lg:mt-44">
                    <div className="text-white translate-y-11   transition-all group-hover:translate-y-0 group-hover:opacity-100  ">
                      {targetedNGO3 && (
                        <p className="text-gray-400  text-sm mt-20">
                          {targetedNGO3.location}
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
                <img
                  alt="Developer"
                  src="https:images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

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
                {targetedNGO5 && (
                  <img
                    alt="Developer"
                    src={`${targetedNGO5.website}`}
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
        <h1 className="text-center  text-4xl mt-8">How it works</h1>
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

       

<div className="mt-8   md:w-1/2 p-4 flex   ">
          <div className="grid grid-cols-2 gap-1 gap-x-6">
            <div className="">
            <h1>Disaster Recovery</h1>
    <p>
      GlobalGiving makes it easy to donate to reliable, locally-led disaster
      relief and recovery efforts around the world.
    </p>
            </div>

            <div className="">
            <img
      class="w-96"
      src="https://img.icons8.com/external-jumpicon-line-ayub-irawan/256/external-_5-kwanzaa-jumpicon-(line)-jumpicon-line-ayub-irawan.png"
    />
            </div>
            </div>          
            </div>
    </section>
  );
}
export default HomePage;

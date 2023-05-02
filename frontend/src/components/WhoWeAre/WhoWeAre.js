// import Navbar from "./Navbar";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const WhoWeAre = () => {
  const bio = "Web developer passionate about React and Tailwind CSS.";
  const location = "Nairobi, Kenya 🇰🇪";
  const website = "https://github.com/febiasm";
  const email = "https://gmail.com";
  const twitter = "https://twitter.com";
  const [profiles, setProfiles] = useState([
    // Trevor
    {
      name: "Trevor Febias",
      image:
        "https://ca.slack-edge.com/T0101L740P4-U0490LUH4CA-b96a3bcb4510-512",
      message: (
        <div className="flex  justify-center items-center h-screen mt-24    mx-auto p-4">
          <div className="w-full md:w-3/4 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full md:w-3/4">
                <div className=" p-4 md:p-8 bg-white rounded-lg shadow-md">
                  {/* top */}
                  <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                      <img
                        src="https://ca.slack-edge.com/T0101L740P4-U0490LUH4CA-b96a3bcb4510-512"
                        alt=""
                        className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                      />
                      <div className="flex flex-col">
                        <h4 className="text-lg font-semibold text-center md:text-left">
                          Trevor Febais
                        </h4>
                        <p className="dark:text-gray-400">
                          I specialize in developing Full-stack web applications
                          that leverage cutting-edge technologies and frameworks
                          to deliver an exceptional user experience. With a
                          strong background in both front-end and back-end
                          development, I'm able to seamlessly integrate the two
                          to create fully-functional and responsive web
                          applications that work across different devices and
                          platforms. Whether you need a custom-built web app or
                          a complex enterprise solution, I have the expertise to
                          deliver it.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 align-center">
                      <a
                        rel="noopener noreferrer"
                        href="https://github.com/febiasm"
                        aria-label="GitHub"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      >
                        <svg
                          viewBox="0 0 496 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>
                      </a>

                      <a
                        rel="noopener noreferrer"
                        href="https://gmail.com"
                        aria-label="Twitter"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      >
                        <svg
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                        </svg>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="https://gmail.com"
                        aria-label="Email"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      >
                        <svg
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between items-center">
                    <h1 className="font-bold text-xl mb-4">About Me</h1>
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 text-sm"
                    >
                      Visit Website
                    </a>
                  </div>
                  <p className="mb-4">{bio}</p>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-1/2 md:w-1/3">
                      <h2 className="font-bold text-gray-600 mb-2">Location</h2>
                      <p>{location}</p>
                    </div>
                    <div className="w-1/2 md:w-1/3">
                      <h2 className="font-bold text-gray-600 mb-2">
                        Followers
                      </h2>
                      <p>9.8M</p>
                    </div>
                    <div className="w-1/2 md:w-1/3">
                      <h2 className="font-bold text-gray-600 mb-2">
                        Following
                      </h2>
                      <p>67</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="font-bold text-xl mb-4">Experience</h2>
                        <ul>
                          <li className="mb-2">
                            <h3 className="font-bold">Web Developer</h3>
                            <p className="text-gray-500">Moringa School</p>
                            <p>
                              Responsible for building web applications using
                              React and Tailwind CSS.
                            </p>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">Software Engineer</h3>
                            <p className="text-gray-500">Google Company</p>
                            <p>
                              Developed and maintained software applications
                              using Ruby and Spring Framework.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2
                          className="font-bold text-xl mb-
4"
                        >
                          Skills
                        </h2>
                        <ul>
                          <li className="mb-2">
                            <h3 className="font-bold">React</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "70%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">Tailwind CSS</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "80%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">JavaScript</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "90%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">Ruby</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "60%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="font-bold text-xl mb-4">Education</h2>
                        <ul>
                          <li className="mb-2">
                            <h3 className="font-bold">
                              Bachelor's Degree in Computer Science
                            </h3>
                            <p className="text-gray-500">
                              Strathmore University{" "}
                            </p>
                            <p>Graduated in 2018 with a 3.9 GPA.</p>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">
                              Master's Degree in Information Technology
                            </h3>
                            <p className="text-gray-500">New York University</p>
                            <p>Graduated in 2021 with a 4.0 GPA.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="font-bold text-xl mb-4">Interests</h2>
                        <ul>
                          <li>Reading books on technology and business</li>
                          <li>
                            Watching documentaries about nature and science
                          </li>
                          <li>Playing basketball and tennis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Antony Tula",
      image:
        "https://loremflickr.com/320/240/dog",
      message: (
        <div className="flex  justify-center items-center h-screen mt-24    mx-auto p-4">
          <div className="w-full md:w-3/4 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full md:w-3/4">
                <div className=" p-4 md:p-8 bg-white rounded-lg shadow-md">
                  {/* top */}
                  <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                      <img
                        src="https://ca.slack-edge.com/T0101L740P4-U0490LUH4CA-b96a3bcb4510-512"
                        alt=""
                        className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                      />
                      <div className="flex flex-col">
                        <h4 className="text-lg font-semibold text-center md:text-left">
                          Trevor Febais
                        </h4>
                        <p className="dark:text-gray-400">
                          I specialize in developing Full-stack web applications
                          that leverage cutting-edge technologies and frameworks
                          to deliver an exceptional user experience. With a
                          strong background in both front-end and back-end
                          development, I'm able to seamlessly integrate the two
                          to create fully-functional and responsive web
                          applications that work across different devices and
                          platforms. Whether you need a custom-built web app or
                          a complex enterprise solution, I have the expertise to
                          deliver it.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 align-center">
                      <a
                        rel="noopener noreferrer"
                        href="https://github.com/febiasm"
                        aria-label="GitHub"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      >
                        <svg
                          viewBox="0 0 496 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>
                      </a>

                      <a
                        rel="noopener noreferrer"
                        href="https://gmail.com"
                        aria-label="Twitter"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      >
                        <svg
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                        </svg>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="https://gmail.com"
                        aria-label="Email"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      >
                        <svg
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between items-center">
                    <h1 className="font-bold text-xl mb-4">About Me</h1>
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 text-sm"
                    >
                      Visit Website
                    </a>
                  </div>
                  <p className="mb-4">{bio}</p>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-1/2 md:w-1/3">
                      <h2 className="font-bold text-gray-600 mb-2">Location</h2>
                      <p>{location}</p>
                    </div>
                    <div className="w-1/2 md:w-1/3">
                      <h2 className="font-bold text-gray-600 mb-2">
                        Followers
                      </h2>
                      <p>9.8M</p>
                    </div>
                    <div className="w-1/2 md:w-1/3">
                      <h2 className="font-bold text-gray-600 mb-2">
                        Following
                      </h2>
                      <p>67</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="font-bold text-xl mb-4">Experience</h2>
                        <ul>
                          <li className="mb-2">
                            <h3 className="font-bold">Web Developer</h3>
                            <p className="text-gray-500">Moringa School</p>
                            <p>
                              Responsible for building web applications using
                              React and Tailwind CSS.
                            </p>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">Software Engineer</h3>
                            <p className="text-gray-500">Google Company</p>
                            <p>
                              Developed and maintained software applications
                              using Ruby and Spring Framework.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2
                          className="font-bold text-xl mb-
4"
                        >
                          Skills
                        </h2>
                        <ul>
                          <li className="mb-2">
                            <h3 className="font-bold">React</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "70%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">Tailwind CSS</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "80%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">JavaScript</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "90%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">Ruby</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "60%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="font-bold text-xl mb-4">Education</h2>
                        <ul>
                          <li className="mb-2">
                            <h3 className="font-bold">
                              Bachelor's Degree in Computer Science
                            </h3>
                            <p className="text-gray-500">
                              Strathmore University{" "}
                            </p>
                            <p>Graduated in 2018 with a 3.9 GPA.</p>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">
                              Master's Degree in Information Technology
                            </h3>
                            <p className="text-gray-500">New York University</p>
                            <p>Graduated in 2021 with a 4.0 GPA.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="font-bold text-xl mb-4">Interests</h2>
                        <ul>
                          <li>Reading books on technology and business</li>
                          <li>
                            Watching documentaries about nature and science
                          </li>
                          <li>Playing basketball and tennis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Simon Muriithi",
      image:
        "https://picsum.photos/200/300",
      message: (
        <div className="flex  justify-center items-center h-screen mt-24    mx-auto p-4">
          <div className="w-full md:w-3/4 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full md:w-3/4">
                <div className=" p-4 md:p-8 bg-white rounded-lg shadow-md">
                  {/* top */}
                  <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                      <img
                        src="https://ca.slack-edge.com/T0101L740P4-U0490LUH4CA-b96a3bcb4510-512"
                        alt=""
                        className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                      />
                      <div className="flex flex-col">
                        <h4 className="text-lg font-semibold text-center md:text-left">
                          Trevor Febais
                        </h4>
                        <p className="dark:text-gray-400">
                          I specialize in developing Full-stack web applications
                          that leverage cutting-edge technologies and frameworks
                          to deliver an exceptional user experience. With a
                          strong background in both front-end and back-end
                          development, I'm able to seamlessly integrate the two
                          to create fully-functional and responsive web
                          applications that work across different devices and
                          platforms. Whether you need a custom-built web app or
                          a complex enterprise solution, I have the expertise to
                          deliver it.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 align-center">
                      <a
                        rel="noopener noreferrer"
                        href="https://github.com/febiasm"
                        aria-label="GitHub"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      >
                        <svg
                          viewBox="0 0 496 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>
                      </a>

                      <a
                        rel="noopener noreferrer"
                        href="https://gmail.com"
                        aria-label="Twitter"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      >
                        <svg
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                        </svg>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="https://gmail.com"
                        aria-label="Email"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      >
                        <svg
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between items-center">
                    <h1 className="font-bold text-xl mb-4">About Me</h1>
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 text-sm"
                    >
                      Visit Website
                    </a>
                  </div>
                  <p className="mb-4">{bio}</p>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-1/2 md:w-1/3">
                      <h2 className="font-bold text-gray-600 mb-2">Location</h2>
                      <p>{location}</p>
                    </div>
                    <div className="w-1/2 md:w-1/3">
                      <h2 className="font-bold text-gray-600 mb-2">
                        Followers
                      </h2>
                      <p>9.8M</p>
                    </div>
                    <div className="w-1/2 md:w-1/3">
                      <h2 className="font-bold text-gray-600 mb-2">
                        Following
                      </h2>
                      <p>67</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="font-bold text-xl mb-4">Experience</h2>
                        <ul>
                          <li className="mb-2">
                            <h3 className="font-bold">Web Developer</h3>
                            <p className="text-gray-500">Moringa School</p>
                            <p>
                              Responsible for building web applications using
                              React and Tailwind CSS.
                            </p>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">Software Engineer</h3>
                            <p className="text-gray-500">Google Company</p>
                            <p>
                              Developed and maintained software applications
                              using Ruby and Spring Framework.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2
                          className="font-bold text-xl mb-
4"
                        >
                          Skills
                        </h2>
                        <ul>
                          <li className="mb-2">
                            <h3 className="font-bold">React</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "70%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">Tailwind CSS</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "80%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">JavaScript</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "90%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">Ruby</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "60%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="font-bold text-xl mb-4">Education</h2>
                        <ul>
                          <li className="mb-2">
                            <h3 className="font-bold">
                              Bachelor's Degree in Computer Science
                            </h3>
                            <p className="text-gray-500">
                              Strathmore University{" "}
                            </p>
                            <p>Graduated in 2018 with a 3.9 GPA.</p>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">
                              Master's Degree in Information Technology
                            </h3>
                            <p className="text-gray-500">New York University</p>
                            <p>Graduated in 2021 with a 4.0 GPA.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="font-bold text-xl mb-4">Interests</h2>
                        <ul>
                          <li>Reading books on technology and business</li>
                          <li>
                            Watching documentaries about nature and science
                          </li>
                          <li>Playing basketball and tennis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // vincent

    {
      name: "David Mwai",
      image: "https://loremflickr.com/320/240/man",
      message: (
        <div className="flex justify-center items-center h-screen mt-24 ml- mx-auto p-4">
          <div className="w-full md:w-3/4 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full md:w-3/4">
                <div className="p-4 md:p-8 bg-white rounded-lg shadow-md">
                  <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                      <img
                        src="https://picsum.photos/200/300"
                        alt=""
                        className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                      />
                      <div className="flex flex-col">
                        <h4 className="text-lg font-semibold text-center md:text-left">
                          Vincent Chisaka
                        </h4>
                        <p className="dark:text-gray-400">
                          As a Full-stack programmer, I bring a comprehensive
                          set of skills to the table that enable me to build
                          robust and scalable web applications. With expertise
                          in both front-end and back-end development, I'm able
                          to design user-friendly interfaces and functional
                          server-side applications that meet your business
                          needs. From conceptualization to deployment, I have a
                          proven track record of delivering top-notch web
                          solutions that drive business growth.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 align-center">
                      <a
                        rel="noopener noreferrer"
                        href="https://gmail.com"
                        aria-label="GitHub"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      >
                        <svg
                          viewBox="0 0 496 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>
                      </a>

                      <a
                        rel="noopener noreferrer"
                        href="https://gmail.com"
                        aria-label="Twitter"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      >
                        <svg
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                        </svg>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="https://gmail.com"
                        aria-label="Email"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      >
                        <svg
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between items-center">
                    <h1 className="font-bold text-xl mb-4">About Me</h1>
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 text-sm"
                    >
                      Visit Website
                    </a>
                  </div>
                  <p className="mb-4">{bio}</p>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-1/2 md:w-1/3">
                      <h2 className="font-bold text-gray-600 mb-2">Location</h2>
                      <p>{location}</p>
                    </div>
                    <div className="w-1/2 md:w-1/3">
                      <h2 className="font-bold text-gray-600 mb-2">
                        Followers
                      </h2>
                      <p>1,234</p>
                    </div>
                    <div className="w-1/2 md:w-1/3">
                      <h2 className="font-bold text-gray-600 mb-2">
                        Following
                      </h2>
                      <p>567</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="font-bold text-xl mb-4">Experience</h2>
                        <ul>
                          <li className="mb-2">
                            <h3 className="font-bold">Web Developer</h3>
                            <p className="text-gray-500">Moringa School</p>
                            <p>
                              Responsible for building web applications using
                              React and Tailwind CSS.
                            </p>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">Software Engineer</h3>
                            <p className="text-gray-500">Google Company</p>
                            <p>
                              Developed and maintained software applications
                              using Ruby and Spring Framework.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2
                          className="font-bold text-xl mb-
4"
                        >
                          Skills
                        </h2>
                        <ul>
                          <li className="mb-2">
                            <h3 className="font-bold">React</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "70%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">Tailwind CSS</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "80%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">JavaScript</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "90%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">Ruby</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "60%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="font-bold text-xl mb-4">Education</h2>
                        <ul>
                          <li className="mb-2">
                            <h3 className="font-bold">
                              Bachelor's Degree in Computer Science
                            </h3>
                            <p className="text-gray-500">
                              Strathmore University{" "}
                            </p>
                            <p>Graduated in 2018 with a 3.9 GPA.</p>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">
                              Master's Degree in Information Technology
                            </h3>
                            <p className="text-gray-500">New York University</p>
                            <p>Graduated in 2021 with a 4.0 GPA.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="font-bold text-xl mb-4">Interests</h2>
                        <ul>
                          <li>Reading books on technology and business</li>
                          <li>
                            Watching documentaries about nature and science
                          </li>
                          <li>Playing basketball and tennis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // shaun
    {
      name: "Faith Kigen",
      image: "https://loremflickr.com/320/240/cat",
      message: (
        <div className="flex justify-center items-center h-screen mt-24 ml- mx-auto p-4">
          <div className="w-full md:w-3/4 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full md:w-3/4">
                <div className="p-4 md:p-8 bg-white rounded-lg shadow-md">
                  <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                      <img
                        src=" https://picsum.photos/200"
                        alt=""
                        className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                      />
                      <div className="flex flex-col">
                        <h4 className="text-lg font-semibold text-center md:text-left">
                          Shaun Mwangi
                        </h4>
                        <p className="dark:text-gray-400">
                          As a Full-stack programmer, I have a deep
                          understanding of the entire web development process,
                          from server-side programming to front-end design. I
                          use my knowledge and expertise to create web
                          applications that are scalable, maintainable, and
                          optimized for performance. With a focus on best
                          practices and industry standards, I ensure that your
                          web application is secure, efficient, and able to
                          handle high traffic volumes.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 align-center">
                      <a
                        rel="noopener noreferrer"
                        href="https://gmail.com"
                        aria-label="GitHub"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      >
                        <svg
                          viewBox="0 0 496 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>
                      </a>

                      <a
                        rel="noopener noreferrer"
                        href="https://gmail.com"
                        aria-label="Twitter"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      >
                        <svg
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                        </svg>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="https://gmail.com"
                        aria-label="Email"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      >
                        <svg
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between items-center">
                    <h1 className="font-bold text-xl mb-4">About Me</h1>
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 text-sm"
                    >
                      Visit Website
                    </a>
                  </div>
                  <p className="mb-4">{bio}</p>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-1/2 md:w-1/3">
                      <h2 className="font-bold text-gray-600 mb-2">Location</h2>
                      <p>{location}</p>
                    </div>
                    <div className="w-1/2 md:w-1/3">
                      <h2 className="font-bold text-gray-600 mb-2">
                        Followers
                      </h2>
                      <p>1,234</p>
                    </div>
                    <div className="w-1/2 md:w-1/3">
                      <h2 className="font-bold text-gray-600 mb-2">
                        Following
                      </h2>
                      <p>567</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="font-bold text-xl mb-4">Experience</h2>
                        <ul>
                          <li className="mb-2">
                            <h3 className="font-bold">Web Developer</h3>
                            <p className="text-gray-500">Moringa School</p>
                            <p>
                              Responsible for building web applications using
                              React and Tailwind CSS.
                            </p>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">Software Engineer</h3>
                            <p className="text-gray-500">Google Company</p>
                            <p>
                              Developed and maintained software applications
                              using Ruby and Spring Framework.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2
                          className="font-bold text-xl mb-
4"
                        >
                          Skills
                        </h2>
                        <ul>
                          <li className="mb-2">
                            <h3 className="font-bold">React</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "70%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">Tailwind CSS</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "80%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">JavaScript</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "90%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">Ruby</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "60%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="font-bold text-xl mb-4">Education</h2>
                        <ul>
                          <li className="mb-2">
                            <h3 className="font-bold">
                              Bachelor's Degree in Computer Science
                            </h3>
                            <p className="text-gray-500">
                              Strathmore University{" "}
                            </p>
                            <p>Graduated in 2018 with a 3.9 GPA.</p>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">
                              Master's Degree in Information Technology
                            </h3>
                            <p className="text-gray-500">New York University</p>
                            <p>Graduated in 2021 with a 4.0 GPA.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="font-bold text-xl mb-4">Interests</h2>
                        <ul>
                          <li>Reading books on technology and business</li>
                          <li>
                            Watching documentaries about nature and science
                          </li>
                          <li>Playing basketball and tennis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // vivian
    {
      name: "Joseph Wambua",
      image: "https://loremflickr.com/320/240/king",
      message: (
        <div className="flex justify-center items-center h-screen mt-24 ml- mx-auto p-4">
          <div className="w-full md:w-3/4 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full md:w-3/4">
                <div className="p-4 md:p-8 bg-white rounded-lg shadow-md">
                  <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                      <img
                        src="https://loremflickr.com/320/240"
                        alt=""
                        className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                      />
                      <div className="flex flex-col">
                        <h4 className="text-lg font-semibold text-center md:text-left">
                          Vivian Njoroge
                        </h4>
                        <p className="dark:text-gray-400">
                          With years of experience as a Full-stack programmer, I
                          have a proven track record of delivering high-quality
                          web applications that meet the unique needs of
                          businesses across different industries. From
                          e-commerce platforms to social networking sites, I
                          have experience developing a range of web applications
                          that are user-friendly, feature-rich, and optimized
                          for search engines. I work closely with my clients to
                          understand their goals and requirements, and then
                          leverage my expertise to deliver web solutions that
                          exceed their expectations.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 align-center">
                      <a
                        rel="noopener noreferrer"
                        href="https://gmail.com"
                        aria-label="GitHub"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      >
                        <svg
                          viewBox="0 0 496 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>
                      </a>

                      <a
                        rel="noopener noreferrer"
                        href="https://gmail.com"
                        aria-label="Twitter"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      >
                        <svg
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                        </svg>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="https://gmail.com"
                        aria-label="Email"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      >
                        <svg
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between items-center">
                    <h1 className="font-bold text-xl mb-4">About Me</h1>
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 text-sm"
                    >
                      Visit Website
                    </a>
                  </div>
                  <p className="mb-4">{bio}</p>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-1/2 md:w-1/3">
                      <h2 className="font-bold text-gray-600 mb-2">Location</h2>
                      <p>{location}</p>
                    </div>
                    <div className="w-1/2 md:w-1/3">
                      <h2 className="font-bold text-gray-600 mb-2">
                        Followers
                      </h2>
                      <p>1,234</p>
                    </div>
                    <div className="w-1/2 md:w-1/3">
                      <h2 className="font-bold text-gray-600 mb-2">
                        Following
                      </h2>
                      <p>567</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="font-bold text-xl mb-4">Experience</h2>
                        <ul>
                          <li className="mb-2">
                            <h3 className="font-bold">Web Developer</h3>
                            <p className="text-gray-500">Moringa School</p>
                            <p>
                              Responsible for building web applications using
                              React and Tailwind CSS.
                            </p>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">Software Engineer</h3>
                            <p className="text-gray-500">Google Company</p>
                            <p>
                              Developed and maintained software applications
                              using Ruby and Spring Framework.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2
                          className="font-bold text-xl mb-
4"
                        >
                          Skills
                        </h2>
                        <ul>
                          <li className="mb-2">
                            <h3 className="font-bold">React</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "70%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">Tailwind CSS</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "80%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">JavaScript</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "90%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">Ruby</h3>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                  style={{ width: "60%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                ></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="font-bold text-xl mb-4">Education</h2>
                        <ul>
                          <li className="mb-2">
                            <h3 className="font-bold">
                              Bachelor's Degree in Computer Science
                            </h3>
                            <p className="text-gray-500">
                              Strathmore University{" "}
                            </p>
                            <p>Graduated in 2018 with a 3.9 GPA.</p>
                          </li>
                          <li className="mb-2">
                            <h3 className="font-bold">
                              Master's Degree in Information Technology
                            </h3>
                            <p className="text-gray-500">New York University</p>
                            <p>Graduated in 2021 with a 4.0 GPA.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="font-bold text-xl mb-4">Interests</h2>
                        <ul>
                          <li>Reading books on technology and business</li>
                          <li>
                            Watching documentaries about nature and science
                          </li>
                          <li>Playing basketball and tennis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleClick = (index) => {
    const newProfiles = [];
    setProfiles(newProfiles);
    setSelectedProfile(profiles[index]);
  };

  return (
    <div>
      <NavBar/>
      <div className="profile flex flex-wrap justify-center">
        {profiles.map((profile, index) => (
          <div
            className="w-full md:w-1/2 lg:w-1/2 mb-6 px-2"
            key={index}
            onClick={() => handleClick(index)}
          >
            <div className="ml-12 mt-20 mr-12 bg-gray-300 rounded-xl shadow-md overflow-hidden">
              <img
                src={profile.image}
                alt=""
                className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
              />
              <div className="p-6 space-y-4 text-center divide-y divide-gray-400">
                <div className="my-2 space-y-1">
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    {profile.name}
                  </h2>
                  <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                    Full-stack developer
                  </p>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center">
                  <a
                    rel="noopener noreferrer"
                    href={website}
                    aria-label="GitHub"
                    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                  >
                    <svg
                      viewBox="0 0 496 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>

                  <a
                    rel="noopener noreferrer"
                    href={twitter}
                    aria-label="Twitter"
                    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href={email}
                    aria-label="Email"
                    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link to="/HomePage">
          <button
            class="ml-12 mt-20 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={() => window.location.reload()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 inline-block align-text-bottom"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M20.71 11.29l-8-8C12.53 3.11 12.28 3 12 3s-.53.11-.71.29l-8 8C3.11 11.47 3 11.72 3 12s.11.53.29.71l8 8c.18.18.43.29.71.29s.53-.11.71-.29c.39-.39.39-1.02 0-1.41L6.41 13H20c.55 0 1-.45 1-1s-.45-1-1-1h-13.59l5.29-5.29c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-8 8C3.11 11.47 3 11.72 3 12s.11.53.29.71l8 8C11.47 20.89 11.72 21 12 21s.53-.11.71-.29l8-8c.39-.39.39-1.02 0-1.41z"
              />
            </svg>
            <span class="ml-2">Back</span>
          </button>
        </Link>
      </div>
      <div>
        {selectedProfile && <h2 className="">{selectedProfile.message}</h2>}{" "}
      </div>
    </div>
  );
};

export default WhoWeAre;
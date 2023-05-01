import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleEmailChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { username, password };
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          // Display an error message or handle the invalid email/username case
        } else {
          setUser(data.user);
          const { role } = data; // assuming the server returns the user's role
          navigate(`/HomePage?role=${role}`);
        }
      });
  };

  return (

    <section
      style={{ backgroundColor: "#0E503F" }}
      
    >
      <div className="flex flex-wrap items-center text-xl text-white"><img className="h-14 w-14 ml-20"src={require('./Images/logo.png')} alt="My Image" />Raising Together</div>
      <div className="flex items-center justify-center min-h-screen">
      <div className="flex  w-2/4 h-4/5  p-6">
        <a
          href="#"
          className="h-96  w-96 relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1515658323406-25d61c141a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80)] bg-cover bg-center bg-no-repeat"
        >
          <div className="absolute inset-0 bg-black/25"></div>

          <div className="absolute bottom-0 p-4 sm:p-6 lg:p-8 text-white">
            <h3 className="text-xl font-bold sm:text-2xl">
              BE THE CHANGE YOU WISH TO SEE IN THE WORLD!
            </h3>
            <p className="text-sm">We rise by lifting others</p>
          </div>
        </a>

        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl  font-bold mb-4">Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                UserName
              </label>
              <input
                className="border rounded-lg px-3 py-2 w-full"
                type="username"
                placeholder="UserName"
                id="email"
                name="email"
                value={username}
                onChange={handleEmailChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border rounded-lg px-3 py-2 w-full"
                type="password"
                placeholder="********"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Login
            </button>
            {/* </Link> */}
            <button className="block text-sm text-center text-gray-700  mt-4">
              Don't have an account?{" "}
              <Link to="/SignupPage">
                <button className="text-green-500 hover:underline">
                  Create here.
                </button>
              </Link>
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Login;

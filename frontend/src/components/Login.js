import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };

    fetch("/login", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // handle successful login
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  return (
    <section style={{ backgroundColor: '#0E503F' }} className="flex items-center justify-center min-h-screen">
      <div className="flex  w-2/4 h-4/5  p-6">
     
      <a href="#" className="h-96 w-96 relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1515658323406-25d61c141a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80)] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-black/25"></div>

  <div className="absolute bottom-0 p-4 sm:p-6 lg:p-8 text-white">
    <h3 className="text-xl font-bold sm:text-2xl">BE THE CHANGE YOU WISH TO SEE IN THE WORLD!</h3>
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
                Email
              </label>
              <input
                className="border rounded-lg px-3 py-2 w-full"
                type="email"
                placeholder="youremail@gmail.com"
                id="email"
                name="email"
                value={email}
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

           {/* <Link to="/HomePage">*/} <button 
              className="bg-green-400 w-full text-white px-4 py-2 rounded-lg hover:bg-green-600"
              type="submit"
            >
              Log In
            </button>
            {/* </Link> */}
            <button className="block text-sm text-center text-gray-700  mt-4">
              Don't have an account?{" "}
              <Link to="/SignupPage"><button className="text-green-500 hover:underline">
                Create here.
              </button></Link> 
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;

import { Link } from "react-router-dom";
import { useState } from "react";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { username, email, role, password, password_confirmation };
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <section
      style={{ backgroundColor: "#0E503F" }}
      className="flex items-center justify-center min-h-screen"
    >
      <a
        href="#"
        style={{ height: "630px" }}
        className=" w-96 relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1515658323406-25d61c141a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80)] bg-cover bg-center bg-no-repeat"
      >
        <div class="absolute inset-0 bg-black/25"></div>

        <div class="absolute bottom-0 p-4 sm:p-6 lg:p-8 text-white">
          <h3 class="text-xl font-bold sm:text-2xl">
            BE THE CHANGE YOU WISH TO SEE IN THE WORLD!
          </h3>
          <p class="text-sm">We rise by lifting others</p>
        </div>
      </a>

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              User Name
            </label>
            <input
              className="border rounded-lg px-3 py-2 w-full"
              type="text"
              placeholder="your user name"
              id="username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
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
              onChange={(event) => setEmail(event.target.value)}
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
              placeholder="your password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="border rounded-lg px-3 py-2 w-full"
              type="password"
              placeholder="confirm password"
              id="confirmPassword"
              name="confirmPassword"
              value={password_confirmation}
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Role
            </label>
            <input
              className="border rounded-lg px-3 py-2 w-full"
              type="role"
              placeholder="role"
              id="confirmPassword"
              name="confirmPassword"
              value={role}
              onChange={(event) => setRole(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            SignUp
          </button>

          <p className="mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-green-500">
              LogIn
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default SignupPage;

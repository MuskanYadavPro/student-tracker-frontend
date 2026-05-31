import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-[400px]">

        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-xl mb-6"
        />

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-black text-white py-3 rounded-xl"
        >
          Login
        </button>

        <p className="mt-5 text-center">

          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 ml-2"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;
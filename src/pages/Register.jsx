import { Link, useNavigate } from "react-router-dom";

function Register() {
      const navigate = useNavigate();

  return (
    

    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-[400px]">

        <h1 className="text-3xl font-bold mb-6">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded-xl mb-4"
        />

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
          className="w-full bg-blue-600 text-white py-3 rounded-xl"
        >
          Register
        </button>

        <p className="mt-5 text-center">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;
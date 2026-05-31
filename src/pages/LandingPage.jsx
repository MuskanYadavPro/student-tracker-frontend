import { Link } from "react-router-dom";
import dashboard from "../assets/dashboard.png";


function LandingPage() {

  return (

    <div className="min-h-screen bg-slate-50">

      {/* NAVBAR */}

      <nav className="bg-white shadow-sm">

        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-bold">
            Student Tracker
          </h1>

          <div className="flex gap-6 items-center">

  <a href="#features">
    Features
  </a>

  <a href="#about">
    About
  </a>

  <Link
    to="/login"
    className="text-gray-700 hover:text-black"
  >
    Login
  </Link>

  <Link
    to="/register"
    className="bg-blue-600 text-white px-5 py-2 rounded-lg"
  >
    Sign Up
  </Link>

  <Link
    to="/dashboard"
    className="bg-black text-white px-5 py-2 rounded-lg"
  >
    Dashboard
  </Link>

</div>

        </div>

      </nav>

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <div>

            <h1 className="text-6xl font-bold leading-tight">

              Master Your

              <span className="block text-blue-600">
                Learning Journey
              </span>

            </h1>

            <p className="text-gray-600 mt-6 text-lg">

              Stay organized, track progress,
and manage coding practice,
college work, projects and
placement preparation from one dashboard.

            </p>

            <div className="flex gap-4 mt-10">

              <Link
                to="/dashboard"
                className="bg-black text-white px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition"
              >
                Get Started
              </Link>

              <button
                className="border px-8 py-4 rounded-xl"
              >
                Learn More
              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

  <img
    src={dashboard}
    alt="Dashboard Preview"
    className="rounded-3xl shadow-2xl border"
  />

</div>

        </div>

      </section>
      {/* STATS */}

<section className="bg-white py-20">

  <div className="max-w-6xl mx-auto px-8">

    <div className="grid md:grid-cols-3 gap-8 text-center">

      <div>

        <h2 className="text-5xl font-bold text-blue-600">
          10K+
        </h2>

        <p className="mt-3 text-gray-600">
          Tasks Managed
        </p>

      </div>

      <div>

        <h2 className="text-5xl font-bold text-green-600">
          95%
        </h2>

        <p className="mt-3 text-gray-600">
          Completion Rate
        </p>

      </div>

      <div>

        <h2 className="text-5xl font-bold text-purple-600">
          500+
        </h2>

        <p className="mt-3 text-gray-600">
          Students
        </p>

      </div>

    </div>

  </div>

</section>

{/* FEATURES */}

<section
  id="features"
  className="py-24"
>

  <div className="max-w-6xl mx-auto px-8">

    <h2 className="text-4xl font-bold text-center mb-14">

      Everything You Need

    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white p-8 rounded-3xl shadow-md">

        <h3 className="text-2xl font-bold mb-3">
          DSA Tracking
        </h3>

        <p className="text-gray-600">

          Track coding challenges,
          daily practice and learning goals.

        </p>

      </div>

      <div className="bg-white p-8 rounded-3xl shadow-md">

        <h3 className="text-2xl font-bold mb-3">
           Placement Prep
        </h3>

        <p className="text-gray-600">

          Manage interviews,
          applications and company targets.

        </p>

      </div>

      <div className="bg-white p-8 rounded-3xl shadow-md">

        <h3 className="text-2xl font-bold mb-3">
          Analytics
        </h3>

        <p className="text-gray-600">

          Visualize productivity and
          monitor progress.

        </p>

      </div>

    </div>

  </div>

</section>

<section
  id="about"
  className="bg-slate-100 py-24"
>

  <div className="max-w-6xl mx-auto px-8 text-center">

    <h2 className="text-4xl font-bold mb-6">
      About Student Tracker
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto text-lg">

      Student Tracker is a productivity platform
      designed for students to organize learning,
      coding practice, projects, placements and
      personal goals in one place.

    </p>

  </div>

</section>

{/* DASHBOARD PREVIEW */}

<section className="bg-white py-24">

  <div className="max-w-6xl mx-auto px-8">

    <div className="text-center mb-10">

      <h2 className="text-4xl font-bold">
        Powerful Dashboard
      </h2>

      <p className="text-gray-600 mt-3">
        Manage all your tasks from one place.
      </p>

    </div>

    <img
    src={dashboard}
    alt="Dashboard Preview"
    className="rounded-3xl shadow-2xl border"
  />

  </div>

</section>

<footer className="bg-slate-900 text-white py-10">

  <div className="max-w-6xl mx-auto px-8 text-center">

    <h2 className="text-2xl font-bold">
      Student Task Tracker
    </h2>

    <p className="text-slate-400 mt-3">

      Built with React, Spring Boot and MySQL

    </p>

  </div>

</footer>
    </div>
    

  );

  
}


export default LandingPage;
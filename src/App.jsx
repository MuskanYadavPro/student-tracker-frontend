import { useEffect, useState } from "react";

function App() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("DSA");

  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    fetchTasks();
    fetchStats();
  }, []);

  const fetchTasks = async () => {

    const response = await fetch("http://localhost:8080/tasks");

    const data = await response.json();

    setTasks(data);
  };

  const fetchStats = async () => {

    const response = await fetch("http://localhost:8080/tasks/stats");

    const data = await response.json();

    setStats(data);
  };

  const addTask = async () => {

    if (!title.trim()) return;

    const newTask = {
      title,
      completed: false,
      category
    };

    await fetch("http://localhost:8080/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    });

    setTitle("");

    fetchTasks();
    fetchStats();
  };

  const completeTask = async (id) => {

    await fetch(`http://localhost:8080/tasks/${id}`, {
      method: "PUT"
    });

    fetchTasks();
    fetchStats();
  };

  const deleteTask = async (id) => {

    await fetch(`http://localhost:8080/tasks/${id}`, {
      method: "DELETE"
    });

    fetchTasks();
    fetchStats();
  };

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}

        <div className="mb-8">

          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            Student Task Tracker
          </h1>

          <p className="text-gray-500">
            Manage your DSA, college and placement preparation efficiently.
          </p>

        </div>

        {/* SEARCH + FILTER */}

        <div className="bg-white p-5 rounded-2xl shadow-md mb-8 flex gap-4">

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-black"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 p-3 rounded-xl"
          >
            <option value="ALL">All</option>
            <option value="COMPLETED">Completed</option>
            <option value="PENDING">Pending</option>
          </select>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-3 gap-5 mb-8">

          <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-3xl font-bold">
              {stats.total}
            </h2>

            <p className="text-gray-500 mt-2">
              Total Tasks
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-3xl font-bold text-green-600">
              {stats.completed}
            </h2>

            <p className="text-gray-500 mt-2">
              Completed
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-3xl font-bold text-orange-500">
              {stats.pending}
            </h2>

            <p className="text-gray-500 mt-2">
              Pending
            </p>

          </div>

        </div>

        {/* ADD TASK */}

        <div className="bg-white p-6 rounded-2xl shadow-md mb-8">

          <h2 className="text-xl font-semibold mb-4">
            Add New Task
          </h2>

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Enter task..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-black"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 p-3 rounded-xl"
            >
              <option value="DSA">DSA</option>
              <option value="COLLEGE">College</option>
              <option value="PLACEMENT">Placement</option>
              <option value="PERSONAL">Personal</option>
            </select>

            <button
              onClick={addTask}
              className="bg-black hover:bg-gray-800 text-white px-6 rounded-xl"
            >
              Add Task
            </button>

          </div>

        </div>

        {/* TASKS */}

        <div className="space-y-5">

          {tasks

            .filter((task) => {

              const matchesSearch =
                task.title.toLowerCase()
                  .includes(search.toLowerCase());

              const matchesFilter =
                filter === "ALL" ||
                (filter === "COMPLETED" && task.completed) ||
                (filter === "PENDING" && !task.completed);

              return matchesSearch && matchesFilter;
            })

            .map((task) => (

              <div
                key={task.id}
                className="bg-white p-6 rounded-2xl shadow-md flex justify-between items-center"
              >

                <div>

                  <h2 className="text-xl font-semibold text-gray-800">
                    {task.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {task.category}
                  </p>

                </div>

                <div className="flex gap-3 items-center">

                  {task.completed ? (

                    <span className="text-green-600 font-semibold">
                      Completed
                    </span>

                  ) : (

                    <button
                      onClick={() => completeTask(task.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
                    >
                      Complete
                    </button>

                  )}

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

        </div>

      </div>

    </div>
  );
}

export default App;
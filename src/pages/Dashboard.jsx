
import { useEffect, useState } from "react";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("DSA");
  const [priority, setPriority] = useState("MEDIUM");

  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
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
      category,
      priority,
    };

    await fetch("http://localhost:8080/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    setTitle("");

    fetchTasks();
    fetchStats();
  };

  const completeTask = async (id) => {
    await fetch(`http://localhost:8080/tasks/${id}`, {
      method: "PUT",
    });

    fetchTasks();
    fetchStats();
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:8080/tasks/${id}`, {
      method: "DELETE",
    });

    fetchTasks();
    fetchStats();
  };

  const completionRate =
    stats.total === 0
      ? 0
      : Math.round((stats.completed / stats.total) * 100);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* NAVBAR */}
      <div className="bg-slate-900 text-white px-8 py-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Student Task Tracker</h1>

            <p className="text-slate-400 text-sm">
              Productivity Dashboard
            </p>

            <p className="text-sm text-slate-400">
              {new Date().toDateString()}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
              M
            </div>

            <div className="flex gap-4">
              <button className="bg-white text-black px-4 py-2 rounded-xl">
                Profile
              </button>

              <button className="bg-red-500 text-white px-4 py-2 rounded-xl">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        {/* SEARCH */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border p-3 rounded-xl"
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border p-3 rounded-xl"
            >
              <option value="ALL">All Tasks</option>
              <option value="COMPLETED">Completed</option>
              <option value="PENDING">Pending</option>
            </select>
          </div>
        </div>

        {/* HERO */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-3xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold">Welcome Back!</h2>

          <p className="mt-2 text-blue-100">
            Stay focused and complete your learning goals today.
          </p>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-5 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-4xl font-bold">{stats.total}</h2>

            <p className="text-gray-500 mt-2">Total Tasks</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-4xl font-bold text-green-600">
              {stats.completed}
            </h2>

            <p className="text-gray-500 mt-2">Completed</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-4xl font-bold text-orange-500">
              {stats.pending}
            </h2>

            <p className="text-gray-500 mt-2">Pending</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-4xl font-bold text-blue-600">
              {completionRate}%
            </h2>

            <p className="text-gray-500 mt-2">Progress</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
            <div className="flex justify-between mb-2">
              <span>Task Completion</span>
              <span>{completionRate}%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: `${completionRate}%` }}
              />
            </div>
          </div>
        </div>

        {/* ADD TASK */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Add New Task</h2>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter task..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 border p-3 rounded-xl"
            />

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="border p-3 rounded-xl"
            >
              <option value="HIGH">High</option>
              <option value="MEDIUM">Medium</option>
              <option value="LOW">Low</option>
            </select>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border p-3 rounded-xl"
            >
              <option value="DSA">DSA</option>
              <option value="COLLEGE">College</option>
              <option value="PLACEMENT">Placement</option>
              <option value="PERSONAL">Personal</option>
            </select>

            <button
              onClick={addTask}
              className="bg-slate-900 text-white px-6 rounded-xl hover:bg-slate-700"
            >
              Add
            </button>
          </div>
        </div>

        {/* TASKS */}
        <div className="space-y-4">
          {tasks
            .filter((task) => {
              const matchesSearch = task.title
                .toLowerCase()
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
                className="bg-white p-5 rounded-2xl shadow-md flex justify-between items-center"
              >
                <div>
                  <h2 className="text-lg font-bold">{task.title}</h2>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium
                    ${
                      task.category === "DSA"
                        ? "bg-blue-100 text-blue-600"
                        : task.category === "PLACEMENT"
                        ? "bg-green-100 text-green-600"
                        : task.category === "COLLEGE"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-purple-100 text-purple-600"
                    }`}
                  >
                    {task.category}
                  </span>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium
                    ${
                      task.priority === "HIGH"
                        ? "bg-red-100 text-red-600"
                        : task.priority === "MEDIUM"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>

                <div className="flex gap-3">
                  {!task.completed && (
                    <button
                      onClick={() => completeTask(task.id)}
                      className="bg-green-500 text-white px-4 py-2 rounded-xl"
                    >
                      Complete
                    </button>
                  )}

                  {task.completed && (
                    <span className="text-green-600 font-semibold">
                      ✓ Completed
                    </span>
                  )}

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-xl"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>

        {tasks.length === 0 && (
          <div className="text-center mt-10">
            <div className="text-6xl mb-4">📋</div>

            <h2 className="text-2xl font-bold">No Tasks Yet</h2>

            <p className="text-gray-500 mt-2">
              Create your first task and start tracking progress.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
import { Link } from "react-router-dom"

function ArraysHome() {
  return (
    <div className="flex flex-wrap gap-4 p-6 justify-center">
      <Link to="/Autod">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
          Autod
        </button>
      </Link>

      <Link to="/Esindused">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
          Esindused
        </button>
      </Link>

      <Link to="/Hinnad">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
          Hinnad
        </button>
      </Link>

      <Link to="/Kasutajad">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
          Kasutajad
        </button>
      </Link>

      <Link to="/Tootajad">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
          Töötajad
        </button>
      </Link>

      <Link to="/Tooted">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
          Tooted
        </button>
      </Link>
    </div>
  )
}

export default ArraysHome
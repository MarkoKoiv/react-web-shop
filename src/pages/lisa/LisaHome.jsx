import { Link } from "react-router-dom"


function LisaHome() {
  return (
    <div>
        <div className="flex flex-wrap gap-4 p-6 justify-center">
      <Link to="/lisa-auto">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
          Lisa Auto
        </button>
      </Link>

      <Link to="/lisa-esindus">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
          Lisa Esindus
        </button>
      </Link>

      <Link to="/lisa-hind">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
          Lisa Hind
        </button>
      </Link>

      <Link to="/lisa-kasutaja">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
          Lisa Kasutaja
        </button>
      </Link>

      <Link to="/lisa-tootaja">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
          Lisa Töötaja
        </button>
      </Link>

      <Link to="/lisa-toode">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
         Lisa Toode
        </button>
      </Link>
    </div>
    </div>
  )
}

export default LisaHome
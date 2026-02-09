import { Link } from "react-router-dom"


function HaldaHome() {
  return (
    <div>
            <div className="flex flex-wrap gap-4 p-6 justify-center">
      <Link to="/halda-autod">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
          Halda Autod
        </button>
      </Link>

      <Link to="/halda-esindused">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
          Halda Esindused
        </button>
      </Link>

      <Link to="/halda-hinnad">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
          Halda Hinnad
        </button>
      </Link>

      <Link to="/halda-kasutajad">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
          Halda Kasutajad
        </button>
      </Link>

      <Link to="/halda-tootajad">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
          Halda Töötajad
        </button>
      </Link>

      <Link to="/halda-tooted">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
         Halda Tooted
        </button>
      </Link>
    </div>
    </div>
  )
}

export default HaldaHome
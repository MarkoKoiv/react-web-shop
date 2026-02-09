import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "./assets/react.svg";

function App() {
  const linkClass =
    "px-4 py-2 rounded-lg text-indigo-600 hover:bg-indigo-100 transition font-medium";
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto">

          <div className="flex justify-center pt-6">
            <img
              src={logo}
              alt="Logo"
              className="h-16 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          <nav className="flex justify-center mt-4 pb-6">
            <div className="flex gap-3 bg-slate-50 rounded-xl px-4 py-2 shadow-sm">
             
              <NavLink to="/" className={linkClass}>Avaleht</NavLink>
             {/*  <NavLink to="/esindused" className={linkClass}>Esindused</NavLink> */}
              <NavLink to="/kinkekaardid" className={linkClass}>Kinkekaardid</NavLink>
            
              <NavLink to="/ostukorv" className={linkClass}>Ostukorv</NavLink>
              <NavLink to="/seaded" className={linkClass}>Seaded</NavLink>
              <NavLink to="/kalkulaator" className={linkClass}>Kalkulaator</NavLink>
              <NavLink to="/arrays" className={linkClass}>Arrays</NavLink>
              <NavLink to="/halda" className={linkClass}>Halda</NavLink>
              <NavLink to="/lisa" className={linkClass}>Lisa</NavLink>
              
            </div>
          </nav>
        </div>
      </header>


      <main className="max-w-5xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </>
  );
}

export default App;

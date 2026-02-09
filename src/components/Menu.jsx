import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <div className="logo-container">
        <Link to="/">
          <img
            className="pilt"
            src="https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png"
            alt="HTML5"
          />
        </Link>
      </div>

      <div className="menu-buttons">
        <Link to="/arrays"><button>Arrays</button></Link>
        <Link to="/esindused"><button>Esindused</button></Link>
        <Link to="/kinkekaardid"><button>Kinkekaardid</button></Link>
        <Link to="/lisa-tooted"><button>Lisa Toode</button></Link>
        <Link to="/ostukorv"><button>Ostukorv</button></Link>
        <Link to="/seaded"><button>Seaded</button></Link>
        <Link to="/kalkulaator"><button>Kalkulaator</button></Link>
      </div>
    </div>
  );
}

export default Menu;

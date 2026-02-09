import { useState } from "react";
import tootajadFromDb from "../../data/Tootajad.json";


// {eesnimi : "", perenimi: "", ametikoht:"", telefon:""}

function LisaTootaja() {
  const [tootaja, setTootaja] = useState({
    eesnimi: "",
    perenimi: "",
    ametikoht: "",
    telefon: "",
  });


  function lisa() {
    if (tootaja.eesnimi.trim() === "") {
      alert("Eesnimi on kohustuslik!");
      return;
    }
    if (tootaja.perenimi.trim() === "") {
      alert("Perenimi on kohustuslik!");
      return;
    }
    if (tootaja.ametikoht.trim() === "") {
      alert("Ametikoht on kohustuslik!");
      return;
    }
    if (tootaja.telefon.trim() === "") {
      alert("Telefon on kohustuslik!");
      return;
    }


    tootajadFromDb.push(tootaja);
    setTootaja({
      eesnimi: "",
      perenimi: "",
      ametikoht: "",
      telefon: "",
    });
  }


  return (
    <div className="p-6">
      <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
          Lisa töötaja
        </h2>

        <div className="flex flex-col gap-2">

          <label>Eesnimi</label>
          <input
            value={tootaja.eesnimi}
            onChange={(e) => setTootaja({ ...tootaja, eesnimi: e.target.value })}
            className="px-3 py-2 border rounded-md"
          />

          <label>Perenimi</label>
          <input
            value={tootaja.perenimi}
            onChange={(e) => setTootaja({ ...tootaja, perenimi: e.target.value })}
            className="px-3 py-2 border rounded-md"
          />

          <label>Ametikoht</label>
          <input
            value={tootaja.ametikoht}
            onChange={(e) => setTootaja({ ...tootaja, ametikoht: e.target.value })}
            className="px-3 py-2 border rounded-md"
          />

          <label>Telefon</label>
          <input
            value={tootaja.telefon}
            onChange={(e) => setTootaja({ ...tootaja, telefon: e.target.value })}
            className="px-3 py-2 border rounded-md"
          />

          <button
            onClick={lisa}
            className="mt-3 px-4 py-2 border rounded-md"
          >
            Lisa
          </button>

        </div>
      </div>
    </div>
  );
}

export default LisaTootaja;

import { useState } from "react";
import kasutajadFromDb from "../../data/kasutajad.json";


function LisaKasutaja() {
  const [kasutaja, setKasutaja] = useState({
    kasutajanimi: "",
    email: "",
    parool: "",
    vanus: "",
  });

  function lisa() {
    if (kasutaja.kasutajanimi.trim() === "") {
      alert("Kasutajanimi on kohustuslik!");
      return;
    }
    if (kasutaja.email.trim() === "" || !kasutaja.email.includes("@")) {
      alert("Palun sisesta korrektne email!");
      return;
    }
    if (kasutaja.parool.trim().length < 4) {
      alert("Parool peab olema vähemalt 4 tähemärki!");
      return;
    }
    if (kasutaja.vanus === "" || Number(kasutaja.vanus) <= 0) {
      alert("Vanus peab olema suurem kui 0!");
      return;
    }

    const uusKasutaja = {
      ...kasutaja,
      vanus: Number(kasutaja.vanus),
    };

    // (Lihtne duplikaadi kaitse)
    const jubaOn = kasutajadFromDb.some(k => k.email.toLowerCase() === uusKasutaja.email.toLowerCase());
    if (jubaOn) {
      alert("Selle emailiga kasutaja on juba olemas!");
      return;
    }

    kasutajadFromDb.push(uusKasutaja);

    setKasutaja({
      kasutajanimi: "",
      email: "",
      parool: "",
      vanus: "",
    });
  }

  return (
    <div className="p-6">
      <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
          Lisa kasutaja
        </h2>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Kasutajanimi</label>
          <input
            value={kasutaja.kasutajanimi}
            onChange={(e) => setKasutaja({ ...kasutaja, kasutajanimi: e.target.value })}
            placeholder="Nt. mari"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />

          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            value={kasutaja.email}
            onChange={(e) => setKasutaja({ ...kasutaja, email: e.target.value })}
            placeholder="Nt. mari@example.com"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />

          <label className="text-sm font-medium text-gray-700">Parool</label>
          <input
            type="text"
            value={kasutaja.parool}
            onChange={(e) => setKasutaja({ ...kasutaja, parool: e.target.value })}
            placeholder="parool"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />

          <label className="text-sm font-medium text-gray-700">Vanus</label>
          <input
            type="number"
            value={kasutaja.vanus}
            onChange={(e) => setKasutaja({ ...kasutaja, vanus: e.target.value })}
            placeholder="Nt. 41"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />

          <button
            onClick={lisa}
            className="mt-3 px-4 py-2 text-sm rounded-md border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition"
          >
            Lisa
          </button>


        </div>
      </div>
    </div>
  );
}

export default LisaKasutaja;

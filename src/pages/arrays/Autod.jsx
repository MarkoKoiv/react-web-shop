import { useRef, useState } from "react";
import autos from "../../data/autod.json"
import { Link } from "react-router-dom";
import ostukorvFailist from "../../data/ostukorv.json"
import { ToastContainer, toast } from 'react-toastify';

function Autod() {
  // const autos = [
  //   "Tesla Model 3",
  //   "Toyota Camry",
  // "Ford F-15",
  //"BMW M4",
  // "Porsche 911",
  // "Honda Civic",
  // "Chevrolet Corvette",
  // "Audi Q5",
  // "Mercedes-Benz S-Class",
  // "Hyundai Ioniq 5"
  // ];

  const [autod, setAutod] = useState(autos);
  const otsingRef = useRef();

  function reset() {
    setAutod(autos)
  }

  function sorteeriAZ() {
    setAutod([...autod].sort((a, b) => a.nimi.localeCompare(b.nimi)))
  }

  function sorteeriZA() {
    setAutod([...autod].sort((a, b) => b.nimi.localeCompare(a.nimi)))
  }

  function sorteeriTahedKasvavalt() {
    setAutod([...autod].sort((a, b) => a.nimi.length - b.nimi.length))
  }

  function sorteeriTahedKahanevalt() {
    setAutod([...autod].sort((a, b) => b.nimi.length - a.nimi.length))
  }

  function sorteeriKolmasTahtAZ() {
    setAutod([...autod].sort((a, b) => a.nimi[2].localeCompare(b.nimi[2])))
  }

  function filtreeriLoppevad5() {
    setAutod(autos.filter(auto => auto.nimi.endsWith("5")))
  }

  function filtreeriTapselt11Tahte() {
    setAutod(autos.filter(auto => auto.nimi.length === 11))
  }

  function filtreeriVahemalt9Tahte() {
    setAutod(autos.filter(auto => auto.nimi.length >= 9))
  }

  function filtreeriTeineTaht0() {
    setAutod(autos.filter(auto => auto.nimi[1] === "o"))
  }

  function filtreeriSisaldabLyhenditOr() {
    setAutod(autos.filter(auto => auto.nimi.includes("or")))
  }

  function sorteeriHindKasvavalt() {
    autod.sort((a, b) => a.hind - b.hind)
    setAutod(autod.slice());
  }
  function sorteeriHindKahanevalt() {
    autod.sort((a, b) => b.hind - a.hind)
    setAutod(autod.slice());
  }

  function lisaOstukorvi(klikitudAuto) {
    ostukorvFailist.push(klikitudAuto);
    toast.success("Ostukorvi lisatud!");
  }

  // const on muutuja, mis saab ühe korra väärtuse ja seda enam ei muudeta
  // by default võiks kõik muutuja panna const-ks

  // let on muutuja, mida saan muuta nii mitu korda tahan

  function arvutaKokku() {
    let summa = 0;
    /* summa += 40000; */
    autod.forEach(auto => summa += auto.hind);
    return summa;
  }

  function otsi() {
    const vastus = autos.filter(auto => auto.nimi.toLowerCase().includes(otsingRef.current.value.toLowerCase()));
    setAutod(vastus);
  }

  return (
    <div className="min-h-screen flex justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow p-6">
        <label>Otsi: </label>
        <input ref={otsingRef} onChange={otsi} type="text" />

        <h1 className="text-2xl font-semibold mb-4 text-center">
          Autode nimekiri
        </h1>

        <div className="text-gray-600 mb-4 text-center">
          Kokku autosid: <span className="font-semibold">{autod.length}</span>
        </div>

        {/* Reset */}
        <div className="flex justify-center mb-6">
          <button
            onClick={reset}
            className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 transition shadow-sm"
          >
            Reset
          </button>
        </div>

        {/* Sorteerimine */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Sorteerimine</h2>
          <div className="flex flex-wrap gap-3">
            <button onClick={sorteeriAZ} className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 transition shadow-sm">A–Z</button>
            <button onClick={sorteeriZA} className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 transition shadow-sm">Z–A</button>
            <button onClick={sorteeriHindKasvavalt} className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 transition shadow-sm">Sorteeri hind kasvavalt</button>
            <button onClick={sorteeriHindKahanevalt} className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 transition shadow-sm">Sorteeri hind kahanevalt</button>
            <button onClick={sorteeriTahedKasvavalt} className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 transition shadow-sm">Tähemärke ↑</button>
            <button onClick={sorteeriTahedKahanevalt} className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 transition shadow-sm">Tähemärke ↓</button>
            <button onClick={sorteeriKolmasTahtAZ} className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 transition shadow-sm">3. täht A–Z</button>
          </div>
        </div>

        {/* Filtreerimine */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Filtreerimine</h2>
          <div className="flex flex-wrap gap-3">
            <button onClick={filtreeriLoppevad5} className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 transition shadow-sm">Lõppevad 5</button>
            <button onClick={filtreeriTapselt11Tahte} className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 transition shadow-sm">Täpselt 11 tähemärki</button>
            <button onClick={filtreeriVahemalt9Tahte} className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 transition shadow-sm">Vähemalt 9 tähemärki</button>
            <button onClick={filtreeriTeineTaht0} className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 transition shadow-sm">Teine täht „o“</button>
            <button onClick={filtreeriSisaldabLyhenditOr} className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 transition shadow-sm">Sisaldab „or“</button>
          </div>
        </div>

        {/* Autode list */}
        <div className="flex flex-col gap-4">
          {autod.map((auto, index) => (
            <div
              key={auto.id}
              className="p-4 border border-gray-200 rounded-lg bg-gray-50 flex flex-col gap-3"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">
                  {auto.nimi}
                </span>
                <span className="text-gray-700 font-semibold">
                  {auto.hind} €
                </span>
              </div>

              <div className="flex gap-3">
                <Link to={"/auto/" + index}>
                  <button className="px-3 py-1.5 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                    Vt lähemalt
                  </button>
                </Link>

                <button
                  onClick={() => lisaOstukorvi(auto)}
                  className="px-3 py-1.5 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                >
                  Lisa ostukorvi
                </button>
              </div>
            </div>
          ))}

          <div className="mt-4 text-right font-semibold text-gray-800">
            Kõikide autode hinnad kokku:{" "}
            <span className="text-gray-900">{arvutaKokku()} €</span>
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={4000}
          theme="light"
        />

      </div>
    </div>
  )
}

export default Autod
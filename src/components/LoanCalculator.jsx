import { useRef, useState } from "react"


function LoanCalculator() {
  const ostuhindRef = useRef();
  const sissemakseRef = useRef();
  const perioodRef = useRef();
  const marginaalRef = useRef();
  const euriborRef = useRef();
  const [kuumakse, setKuumakse] = useState(30);
  const [laenusumma, setLaenusumma] = useState(75000);
  const [intressKokku, setIntressKokku] = useState(3.85);

  function arvutaKuumakse() {
    setKuumakse((ostuhindRef.current.value - sissemakseRef.current.value) /
      perioodRef.current.value / 12 *
      (Number(marginaalRef.current.value) + Number(euriborRef.current.value)) / 3
    );


    setLaenusumma(ostuhindRef.current.value - sissemakseRef.current.value);

    setIntressKokku(Number(marginaalRef.current.value) + Number(euriborRef.current.value));

  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4">


      {laenusumma >= 20000 && laenusumma <= 10000000 ? (
        <div className="text-center text-lg font-semibold text-green-600">
          Kuumakse: {kuumakse.toFixed(2)} €
        </div>
      ) : (
        <div className="text-center text-sm text-red-600">
          Laenusumma võib olla vahemikus 20 000 – 10 000 000 eurot.
        </div>
      )}


      <div className="space-y-3">


        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Kinnisvara ostuhind</label>
          <input
            defaultValue={75000}
            ref={ostuhindRef}
            onChange={arvutaKuumakse}
            type="text"
            maxlength="8"
            className="mt-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Sissemaks</label>
          <input
            defaultValue={0}
            ref={sissemakseRef}
            onChange={arvutaKuumakse}
            type="text"
            maxlength="8"
            className="mt-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Laenusumma</label>
          <input
            value={laenusumma}
            disabled
            type="text"
            className="mt-1 rounded-lg bg-gray-100 border border-gray-300 px-3 py-2 text-gray-600 cursor-not-allowed"
          />
        </div>


        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Periood (aastates)</label>
          <input
            defaultValue={30}
            ref={perioodRef}
            onChange={arvutaKuumakse}
            type="text"
            maxlength="2"
            className="mt-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Marginaal (%)</label>
          <input
            defaultValue={1.7}
            ref={marginaalRef}
            type="text"
            onChange={arvutaKuumakse}
            className="mt-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Euribor (%)</label>
          <input
            defaultValue={2.15}
            ref={euriborRef}
            type="text"
            onChange={arvutaKuumakse}
            className="mt-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Intress kokku</label>
          <input
            value={intressKokku.toFixed(2)}
            disabled
            type="text"
            className="mt-1 rounded-lg bg-gray-100 border border-gray-300 px-3 py-2 font-semibold text-gray-700 cursor-not-allowed"
          />
        </div>


      </div>
    </div>
  )
}

export default LoanCalculator;
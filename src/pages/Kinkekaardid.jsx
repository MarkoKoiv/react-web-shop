import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


function Kinkekaardid() {
  const [summa, setSumma] = useState(20);
  const [amount, setAmount] = useState(1);
  const emailRef = useRef();

  function insertEmail() {
    const email = emailRef.current.value;

    if (!email) {
      toast.error("Ei saa sisestada tühja emaili!");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Ei saa sisestada ilma @ märgita!");
      return;
    }

    if (email.length < 5) {
      toast.error("Email liiga lühike!");
      return;
    }

    toast.success("Email sisestatud!");
  }

  return (
    <div className="flex justify-center pt-16">
      <div
        className="
          w-full max-w-md
          bg-white
          rounded-2xl
          shadow-xl
          p-8
          opacity-100
          text-gray-900
        "
      >
        {/* SUMMA */}
        <div className="flex justify-center gap-4 mb-8">
          {[20, 50, 100].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setSumma(value)}
              className={`!opacity-100 px-6 py-3 rounded-xl border font-bold text-lg transition-all duration-150
                ${summa === value
                  ? "!bg-pink-600 !text-white !border-pink-600 ring-4 ring-pink-300"
                  : "!bg-white !text-gray-900 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {value}€
            </button>
          ))}
        </div>

        {/* VALITUD */}
        <div className="text-center mb-6 text-lg">
          Kinkekaardi väärtus:{" "}
          <span className="font-bold text-pink-600">
            {summa} €
          </span>
        </div>

        {/* KOGUS */}
        <div className="flex justify-center items-center mb-6">
          <button
            type="button"
            onClick={() => setAmount(Math.max(1, amount - 1))}
            className="!opacity-100 px-4 py-2 border rounded-l-lg text-xl"
          >
            −
          </button>

          <span className="px-6 py-2 border-t border-b text-xl font-semibold">
            {amount}
          </span>

          <button
            type="button"
            onClick={() => setAmount(amount + 1)}
            className="!opacity-100 px-4 py-2 border rounded-r-lg text-xl"
          >
            +
          </button>
        </div>

        {/* KOKKU */}
        <div className="text-center text-2xl font-bold mb-8">
          Kokku:{" "}
          <span className="text-pink-600">
            {summa * amount} €
          </span>
        </div>

        {/* EMAIL */}
        <div className="mb-6">
          <label className="block mb-2 text-center font-semibold">
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            placeholder="sisesta@email.ee"
            className="!opacity-100 w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        {/* SUBMIT */}
        <button
          type="button"
          onClick={insertEmail}
          className="!opacity-100 w-fullocker w-full bg-pink-600 text-white py-3 rounded-xl font-bold hover:bg-pink-500 transition"
        >
          Sisesta email
        </button>
        <ToastContainer
          position="bottom-center"
          autoClose={4000}
          theme="light"
        />
      </div>
    </div>
  );
}

export default Kinkekaardid;

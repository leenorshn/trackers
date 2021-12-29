import Link from "next/link";
import { useState } from "react";

const Newtracker = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [trafic, setTrafic] = useState("");
  const [id, setId] = useState("");
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="max-w-4xl mx-auto bg-white min-h-screen">
        <form className="max-w-xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="py-8 text-2xl font-extrabold text-blue-500">
              New Tracker car
            </h1>
            <Link href="/">
              <a className="text-white bg-black px-8 py-2 rounded-md">Back</a>
            </Link>
          </div>
          <div>
            <label htmlFor="cardName"></label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Car name"
            />
          </div>
          <div>
            <label htmlFor="cardName"></label>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              placeholder="Company"
            />
          </div>
          <div>
            <label htmlFor="cardName"></label>
            <input
              value={trafic}
              onChange={(e) => setTrafic(e.target.value)}
              type="text"
              placeholder="Trafic axe"
            />
          </div>
          <div>
            <label htmlFor="cardName"></label>
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              type="text"
              placeholder="Car id"
            />
          </div>
          <div className="flex items-center mt-8 space-x-8 justify-end">
            <button className="px-9 py-2 rounded-md bg-orange-600 text-white">
              Cancel
            </button>
            <button className="px-12 py-2 rounded-md bg-blue-600 text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newtracker;

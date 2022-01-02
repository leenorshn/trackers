import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const Newtracker = () => {
  const [imei, setImei] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImageUrl] = useState("");

  const saveData = async (e) => {
    e.preventDefault();
    const tracker = { imei, model, description };
    await axios.post("http://localhost:5001/trackers", { ...tracker });
    cancelFunc(e);
  };

  const cancelFunc = async (e) => {
    e.preventDefault();
    setImei("");
    setModel("");
    setDescription("");
    //setImageUrl("");
  };
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
              value={imei}
              onChange={(e) => setImei(e.target.value)}
              type="text"
              placeholder="Car imei"
            />
          </div>
          <div>
            <label htmlFor="cardName"></label>
            <input
              value={model}
              onChange={(e) => setModel(e.target.value)}
              type="text"
              placeholder="model"
            />
          </div>
          <div>
            <label htmlFor="cardName"></label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="Trafic axe"
            />
          </div>

          <div className="flex items-center mt-8 space-x-8 justify-end">
            <button className="px-9 py-2 rounded-md bg-orange-600 text-white">
              Cancel
            </button>
            <button
              onClick={(e) => saveData(e)}
              className="px-12 py-2 rounded-md bg-blue-600 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newtracker;

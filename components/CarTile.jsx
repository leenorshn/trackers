import { TrashIcon } from "@heroicons/react/outline";

const CarTile = ({ car }) => {
  return (
    <div className="px-3 py-2 rounded-md shadow bg-white ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={car.image_url} alt="" className="w-40 h-full" />
          <div>
            <h3 className="font-bold text-xl ">{car.company}</h3>
            <p>{car.trafic}</p>
          </div>
        </div>
        <TrashIcon className="h-7 w-6 text-orange-500" />
      </div>
    </div>
  );
};

export default CarTile;

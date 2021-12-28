const CarTile = ({ car }) => {
  return (
    <div className="px-3 py-2 rounded-md shadow bg-white ">
      <div className="flex items-center space-x-4">
        <img src={car.imgUrl} alt="" className="w-40 h-full" />
        <div>
          <h3 className="font-bold text-xl ">{car.name}</h3>
          <p>{car.trafic}</p>
        </div>
      </div>
    </div>
  );
};

export default CarTile;

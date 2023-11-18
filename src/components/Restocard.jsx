const RestoCard = ({
  name,
  averageRating,
  cuisine,
  priceForTwo,
  image,
  deliveryTime,
}) => {
  return (
    <div className="flex mt-10 gap-2 h-80 w-80">
      <div className="flex flex-col items-start p-4 rounded-md gap-2 max-w-60 h-full w-full">
        <img
          className="w-60 h-28 object-cover rounded-md"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image}`}
          alt="foodimg"
        />

        <div className="h-40 w-40 flex flex-col items-start justify-between">
          <div className="text-lg font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis ">
            {name}
          </div>
          <div className="text-sm m-1 overflow-hidden whitespace-break overflow-ellipsis">
            {cuisine}
          </div>
          <div className="flex items-center h-20 w-40 justify-center">
            <span className="mr-2 text-yellow-500">{averageRating}</span>
            <span className="mr-2">{deliveryTime} mins</span>
            <span>{priceForTwo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestoCard) => {
  return ( props ) => {
    return (
      <div>
        <label htmlFor="" className="absolute bg-orange-400 rounded-lg p-1 m-2 text-white">opened</label>
        <RestoCard {...props} />
      </div>
    );
  };
};

export default RestoCard;

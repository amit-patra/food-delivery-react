import { CDN_URL, FALLBACK_IMG } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const ResturentCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-sm bg-gray-200 hover:bg-gray-300" >
      <img
        alt="res-logo"
        className="rounded-lg h-56 w-full"
        src={CDN_URL + cloudinaryImageId}
        onError={(e)=>{
            e.currentTarget.src = FALLBACK_IMG
        }}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default ResturentCard;

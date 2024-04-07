import {CDN_URL} from "./utils/constants"; 
const RestaurantCard = (props) => {
    const {resData} = props;
//   console.log(resData);

// Destructuring it on fly
const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData?.info;
const {deliveryTime} = resData?.card?.card?.info?.sla;

  return (
    <div className="res-card">
      <img className="res-logo"  src={CDN_URL+cloudinaryImageId}/>
      <h3> {name} </h3>
      <h4> {cuisines.join(" , ")} </h4>
      <h5> Rating of : {avgRating} </h5>
      <h5> {costForTwo} </h5>
      <h5> {deliveryTime} mins </h5>
    </div>
  );
};

export default RestaurantCard;
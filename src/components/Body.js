import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "./utils/mockdata";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);

  useEffect(() => {
    fetchData();
    console.log("UseEffect Called");
  }, []);

  console.log("Body Called");

  const fetchData = async () => {
    //const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    //const data  = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.681711298285776&lng=75.83385474979877&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    // setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //logic of filter:-
            const filteredlist = resList.filter(
              (res) => res.card.card.info.avgRating > 4.2
            );
            // console.log("Button Clicked");
            console.log(filteredlist);
            setListOfRes(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;

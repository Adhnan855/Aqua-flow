import React from "react";
import logo from "../../assets/images/logo-no-background.png";
import "./Restaurantpg.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const restaurantss = [
    {
      hotelimage: require("../../assets/image/haile.jpg"),
      hotelsname: "Sheraton Hotel",
      hAddress: "Addis Ababa, Ethiopia",
    },
    {
        hotelimage: require("../../assets/image/haile.jpg"),
        hotelsname: "Sheraton Hotel",
        hAddress: "Addis Ababa, Ethiopia",
      },
      {
        hotelimage: require("../../assets/image/haile.jpg"),
        hotelsname: "Sheraton Hotel",
        hAddress: "Addis Ababa, Ethiopia",
      },
      {
        hotelimage: require("../../assets/image/haile.jpg"),
        hotelsname: "Sheraton Hotel",
        hAddress: "Addis Ababa, Ethiopia",
      },
];

function RestaurantPage() {
  return (
    <div className="restaurantpage">
      <div className="header_top">
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="restaurant_content">
        <h1>Restaurants</h1>
        <label for="">
          <input type="text" placeholder="search restaurant" />
          <button>Search</button>
        </label>
      </div>
      <div className="restaurants_info">
        <div className="restaurant">
          <img src={hotelimage} alt=""/>
          <div className="hotel_detail">
            <h3>{hotelsname}</h3>
            <p>{hAddress}</p>
          </div>
        </div>
      </div>
      <div className="seemore">
        <button>
          See More <KeyboardDoubleArrowRightIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}

export default RestaurantPage;

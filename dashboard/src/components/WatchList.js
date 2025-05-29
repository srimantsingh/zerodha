import React from "react";
import {Tooltip,Grow} from  "@mui/material";

 //import {keyboardArrowDown, keyboardArrowUp} from "@mui/icons-material";
import { watchlist } from "../data/data";



const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} 9 / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <p key={index}>{stock.name}</p>
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = React.useState(false);
  
  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  };
    
  const handleMouseExit = (e) => {
    setShowWatchListActions(false);
  };

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
    <div className="item">
    <p className={stock.isDown ? " down":"up"}> {stock.name}</p>
    <div className="itemInfo">
      <span className="percent">{ stock.percent}</span>
      {stock.isDown ? (
        <keyboardArrowDown className="down" />
        ) :(
         <keyboardArrowUp className="up" />
         )}
         
        <span className="price">{stock.percent} 9 / 50</span>

    </div>
    </div>
</li>
  )
};

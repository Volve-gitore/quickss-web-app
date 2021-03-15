import React from "react";
import "../../assets/scss/hotelResto.scss";
import "../../assets/scss/navButtons.scss";
import HomeIcon from "@material-ui/icons/Home";
import AddBox from "@material-ui/icons/AddBox";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className='side-bar'>
      <div className='side-bar-title mt'>Quickss</div>
      <ul className='side-bar-list'>
        <li className='side-bar-list-row'>
          {" "}
          <div className='icon'>
            <HomeIcon />
          </div>{" "}
          <div className='title'>
            <Link className='btn-link text-black' to='view-hotel-resto'>
              Home
            </Link>
          </div>{" "}
        </li>
        <li className='side-bar-list-row'>
          {" "}
          <div className='icon'>
            <AddBox />
          </div>{" "}
          <div className='title'>
            <Link className='btn-link text-black' to='add-hotel-resto'>
              Add Restaurent
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

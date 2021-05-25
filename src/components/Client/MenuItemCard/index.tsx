
import React from "react";
import "./style.scss";

const MenuItemCard = (props: any) => {

    return (
        <div className="card">
            <div className="card-img">
                <img src="https://res.cloudinary.com/dp1abfk0j/image/upload/v1568359786/aeug5ovdn77oacxylphy.jpg" alt="burger" />
            </div>
            <div className="card-details">
                <div className="item">
                    <div className="row-1">
                        <div className="title">
                            <h5>Lorem ipsum dolor sit amet </h5>
                            <h6>Category sample</h6>
                        </div>
                        <div className="menu">
                            | <span className="btn-more">&#9679; &#9679; &#9679;</span>
                        </div>
                    </div>
                    <div className="row-2">
                        <div className="item-group">
                            <span>Group 1, </span>
                            <span>Group 2, </span>
                            <span>Group 3 </span>
                        </div>
                        <div className="item-price">
                            5000 <sup className="price-tag">Rwf</sup></div>
                    </div>

                </div>
               
            </div>
        </div>
    );
};

export default MenuItemCard;
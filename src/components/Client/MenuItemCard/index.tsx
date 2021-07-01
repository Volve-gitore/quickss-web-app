import React from "react";
import { IProduct } from "../../../store/client/types";
import "./style.scss";

type Props = {
    item: IProduct;
}

const MenuItemCard = (props:Props) => {

    const { item } = props;

    return (
        <div className="card">
            <div className="card-img">
                 <img
                    src={
                    item.images
                        ? item.images[0]
                        : "https://res.cloudinary.com/dp1abfk0j/image/upload/v1568359786/aeug5ovdn77oacxylphy.jpg"
                    }
                />
            </div>
            <div className="card-details">
                <div className="item">
                    <div className="row-1">
                        <div className="title">
                            <h5>{ item ? item.description : "N/A" } </h5>
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
                        {item ? item.price : "N/A" } <sup className="price-tag">{item ? item.currency : "N/A" }</sup></div>
                    </div>

                </div>
               
            </div>
        </div>
    );
};

export default MenuItemCard;
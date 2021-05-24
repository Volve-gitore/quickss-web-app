import React, { useState } from "react";
import Button from "../../UI/Button";
import AddInputElement from "../../UI/AddInputElement";
import "../style.scss";


const AddCategory = () => {
    return (
        <form className="form-container">
            <div className="form-fields">
            <AddInputElement label="New Category" placeholder="type category name" />
            </div>
            <div className="btn-group">
                <Button type="primary" label="Save" />
            </div>
        </form>
    );
};

export default AddCategory;

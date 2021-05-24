import React, { useState } from "react";
import Button from "../../UI/Button";
import AddInputElement from "../../UI/AddInputElement";
import "../style.scss";


const AddFamily = () => {
    return (
        <form className="form-container">
            <div className="form-fields">
            <AddInputElement label="New Family" placeholder="type family name" />
            </div>
            <div className="btn-group">
                <Button type="primary" label="Save" />
            </div>
        </form>
    );
};

export default AddFamily;

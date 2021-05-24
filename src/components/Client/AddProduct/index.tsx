import React from "react";
import TextInput from "../../UI/Inputs/TextInput";
import Button from "../../UI/Button";
import "../style.scss";

const AddProduct = () => {
    return (
        <div className="form-container">
            <form>
                <TextInput
                    label="Group"
                    select
                    SelectProps={{
                        native: true,
                    }}
                >
                    <option></option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                </TextInput>
                <TextInput
                    label="Family"
                    select
                    SelectProps={{
                        native: true,
                    }}
                >
                    <option></option>
                    <option>Food</option>
                    <option>Drink</option>
                </TextInput>
                <TextInput
                    label="Category"
                    select
                    SelectProps={{
                        native: true,
                    }}
                >
                    <option></option>
                    <option>Soft drink</option>
                    <option>Alcoholic</option>
                    <option>Non alcoholic</option>
                </TextInput>
                <TextInput
                    label="Sub category"
                    select
                    SelectProps={{
                        native: true,
                    }}
                >
                    <option></option>
                    <option>Water</option>
                    <option>Juice</option>
                    <option>Soda</option>
                </TextInput>
                <TextInput
                    label="Product name"
                />
                <div style={{ display: "flex" }}>
                    <TextInput
                        label="Currency"
                        select
                        SelectProps={{
                            native: true,
                        }}
                    >
                        <option></option>
                        <option>FRW</option>
                        <option>USD</option>
                        <option>TSH</option>
                    </TextInput>
                    <TextInput
                        label="Price"
                    />
                </div>
                <TextInput
                    type="file"
                />
                <TextInput label="Description" name="description" multiline
                    rows={4} />

                <div className="btn-group">
                    <Button label="Cancel" />
                    <Button type="primary" label="Save" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;

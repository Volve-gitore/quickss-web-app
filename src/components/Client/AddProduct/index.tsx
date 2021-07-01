import React, { useEffect, ChangeEvent, FormEvent } from "react";
import TextInput from "../../UI/Inputs/TextInput";
import Button from "../../UI/Button";
import "../style.scss"; 
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/configureStore";
import { IGroupCategoryFamily } from "../../../store/client/types";
import { getCategories, getFamilies, getProducts } from "../../../store/client/actions";
import { IState } from "../../../containers/Client/Menu/MenuConfig/type"

type Props = {
    groups?: any;
    categories?: any;
    families?: any;
    onChange?: (e:ChangeEvent<HTMLInputElement>) => void;
    state?: IState;
    onSubmit?: (e: FormEvent) => void;
    onChangeImage?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AddProduct = (props:Props) => {
    const { groups, categories, families, onChange, state, onSubmit, onChangeImage } = props;
    // const { groupId, type, categoryId, name, currency, price, flag, description, images }: {
    //     groupId: String,
    //     type: String,
    //     categoryId: String,
    //     name: String,
    //     currency: String,
    //     price: number,
    //     flag: number,
    //     description: String,
    //     images: [String]} = state;
    return (
        <div className="form-container">
            <form onSubmit={onSubmit}>

                <TextInput
                    name="groupId"
                    value={state?.groupId}
                    label="Group"
                    select
                    SelectProps={{
                        native: true,
                    }}
                    onChange={props.onChange}
                >
                    <option></option>
                    {groups && groups.map((group:any) => (
                         <option key={group.id}>{group.name}</option>
                    ))}
                   
                </TextInput>
                <TextInput
                    name="type"
                    value={state?.type}
                    label="Family"
                    select
                    SelectProps={{
                        native: true,
                    }}
                    onChange={props.onChange}
                >
                    <option></option>
                    {families && families.map((family:any) => (
                         <option key={family.id}>{family.name}</option>
                    ))}
                </TextInput>
                <TextInput
                    name="categoryId"
                    value={state?.categoryId}
                    label="Category"
                    select
                    SelectProps={{
                        native: true,
                    }}
                    onChange={props.onChange}
                >
                    <option></option>
                    {categories && categories.map((category:any) => (
                         <option key={category.id}>{category.name}</option>
                    ))}
                </TextInput>
                <TextInput
                    label="Sub category"
                    select
                    SelectProps={{
                        native: true,
                    }}
                    onChange={props.onChange}
                >
                    <option></option>
                    <option>Water</option>
                    <option>Juice</option>
                    <option>Soda</option>
                </TextInput>
                <TextInput
                    name="name"
                    value={state?.name}
                    label="Product name"
                    onChange={props.onChange}
                />
                <div style={{ display: "flex" }}>
                    <TextInput
                        name="currency"
                        value={state?.currency}
                        label="Currency"
                        select
                        SelectProps={{
                            native: true,
                        }}
                        onChange={props.onChange}
                    >
                        <option></option>
                        <option>FRW</option>
                        <option>USD</option>
                        <option>TSH</option>
                    </TextInput>
                    <TextInput
                        name="price"
                        value={state?.price}
                        label="Price"
                        onChange={props.onChange}
                    />
                </div>
                <TextInput
                    name="images"
                    value={state?.images}
                    onChange={onChangeImage}
                    type="file"
                />
                <TextInput 
                    label="Description" 
                    name="description" 
                    value={state?.description}
                    multiline
                    rows={4} 
                />

                <div className="btn-group">
                    <Button label="Cancel" />
                    <Button type="submit" label="Save" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;

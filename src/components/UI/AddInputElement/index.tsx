import React, { ChangeEvent } from "react";
import TextInput from "../Inputs/TextInput";
import AddCircleIcon from '@material-ui/icons/AddCircle';
interface IProps {
    onSave?: (e: ChangeEvent<HTMLInputElement>) => void | undefined;
    placeholder?: string;
    label?: string;
    inputField?: any;
    handleAddInputField?: any;
    onChange?: any;
    type?: string;
    name?:string;
}
const AddInputElement = (props: IProps) => {
    const { label, placeholder, inputField, handleAddInputField, onChange, type, name } = props;

    return (
        <div>
            {inputField && inputField.map((fld:any, i:number) => (
                <TextInput
                    name={name}
                    key={i}
                    type={type}
                    placeholder={placeholder}
                    label={label}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e, i)}
                />
            ))}
            <AddCircleIcon style={{ fontSize: '35px' }} onClick={handleAddInputField} />
        </div>
    );
};

export default AddInputElement;

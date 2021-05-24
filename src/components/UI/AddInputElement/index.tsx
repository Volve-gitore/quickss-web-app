import React, { useState, ChangeEvent } from "react";
import TextInput from "../Inputs/TextInput";
import AddCircleIcon from '@material-ui/icons/AddCircle';


interface IInputElement {
    type: string;
    label?: string;
    placeholder?: string;
}

interface IProps {
    onSave?: (e: ChangeEvent<HTMLInputElement>) => void | undefined;
    placeholder?: string;
    label?: string;
}
const AddInputElement = (props: IProps) => {
    const { label, placeholder } = props;
    const [inputField, setInputField] = useState<IInputElement[]>([{ type: "text", label: "", placeholder: "" }]);

    const handleAddInputField = () => {
        setInputField([
            ...inputField,
            { type: "text", label, placeholder }
        ]);
    };

    return (
        <div>
            {inputField.map((fld, i) => (
                <TextInput
                    name={fld.type + i}
                    key={fld.type + i}
                    type={fld.type}
                    placeholder={placeholder}
                    label={label}
                />
            ))}
            <AddCircleIcon style={{ fontSize: '35px' }} onClick={handleAddInputField} />
        </div>
    );
};

export default AddInputElement;

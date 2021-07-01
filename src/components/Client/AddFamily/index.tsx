import React, { ChangeEvent, FormEvent, useEffect, useState, MouseEvent } from "react";
import Button from "../../UI/Button";
import AddInputElement from "../../UI/AddInputElement";
import "../style.scss";
import produce from "immer";
import { useDispatch, useSelector } from "react-redux";
import { createFamily } from "../../../store/client/actions";
import { AppState } from "../../../store/configureStore";
import ModalBox from "../../UI/Modal/MessageAlert";

type ICreateFamily = {
    name: string;
    clientId: string;
  }

 type IModalState = {
    open: boolean;
  };
  export interface IErrors {
    status: number;
    statusText: string;
  }

const AddFamily = () => { 

    const dispatch = useDispatch();
    const familyReducer = useSelector((state: AppState) => state.client);
    
    const {
        configMenuErrors,
        familyMessage,
      }: {
        configMenuErrors: IErrors;
        familyMessage: string;
      } = familyReducer;

    const [inputField, setInputField] = useState<ICreateFamily[]>([{name: "", clientId:"c93a072d-45c9-432a-b1ca-850a76b53908"}]);

    const handleAddInputField = () => {
        setInputField((name) => [
            ...name,
            { name: "", clientId: "c93a072d-45c9-432a-b1ca-850a76b53908" }
        ]);
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>, i:any) => {
        const name = e.target.value;
        setInputField((inputField) =>
            produce(inputField, (v) => {
            v[i].name = name;
            })
        );
    };

    useEffect(() => {
        if (familyMessage || configMenuErrors) {
            setModalState({ ...modalState, open: true });
        }
        // eslint-disable-next-line
    }, [familyReducer]);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(createFamily(inputField));
    };

    const [modalState, setModalState] = useState<IModalState>({
        open: false,
    });

    const handleClose = (event: MouseEvent<HTMLElement>) => {
        setModalState({ ...modalState, open: false });
    };

    return (
        <>
            <ModalBox
                handleClose={handleClose}
                state={modalState}
                message={familyMessage}
                error={configMenuErrors && configMenuErrors.statusText}
                title={"Add category"}
                />
            <form className="form-container" onSubmit={onSubmit}>
                <div className="form-fields">
                <AddInputElement name="name" label="New Fmily" placeholder="type family name" type="text" inputField={inputField} handleAddInputField={handleAddInputField} onChange={onChange} />
                </div>
                <div className="btn-group">
                    {/* <Button type="primary" label="Save" /> */}
                    <button type="submit" > Save </button>
                </div>
            </form>
        </>
    );
};

export default AddFamily;

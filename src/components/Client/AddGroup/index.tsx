import React, { ChangeEvent, useState, FormEvent, MouseEvent, useEffect } from "react";
import Button from "../../UI/Button";
import AddInputElement from "../../UI/AddInputElement";
import "../style.scss";
import produce from "immer";
import { useDispatch, useSelector } from "react-redux";
import { createGroup } from "../../../store/client/actions";
import ModalBox from "../../UI/Modal/MessageAlert";
import { AppState } from "../../../store/configureStore";

  type ICreateGroup = {
    name: string;
    clientId: string;
  }

 type IModalState = {
    open: boolean;
  };
  interface IErrors {
    status: number;
    statusText: string;
  }

const AddGroup = () => {
    const dispatch = useDispatch();
    const clientReducer = useSelector((state: AppState) => state.client);
    
    const {
        configMenuErrors,
        groupMessage,
      }: {
        configMenuErrors: IErrors;
        groupMessage: string;
      } = clientReducer;

    const [inputField, setInputField] = useState<ICreateGroup[]>([{name: "", clientId:"c93a072d-45c9-432a-b1ca-850a76b53908"}]);

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
        if (groupMessage || configMenuErrors) {
            setModalState({ ...modalState, open: true });
        }
        // eslint-disable-next-line
    }, [clientReducer]);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(createGroup(inputField));
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
            message={groupMessage}
            error={configMenuErrors && configMenuErrors.statusText}
            title={"Add group"}
            />
            <form className="form-container" onSubmit={onSubmit} >
                <div className="form-fields">
                    <AddInputElement name="name" label="New Group" placeholder="type group name" type="text" inputField={inputField} handleAddInputField={handleAddInputField} onChange={onChange} />
                </div>
                <div className="btn-group">
                    <button type="submit" > Save </button>
                </div>
            </form>
        </>
    );
};

export default AddGroup;

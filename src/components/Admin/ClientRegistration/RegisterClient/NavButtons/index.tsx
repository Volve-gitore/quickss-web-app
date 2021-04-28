import React, { FormEvent } from "react";
import "./styles.scss";
import { Button } from "@material-ui/core";
import { IHotelRestoState } from "../type";

type Props = {
  state: IHotelRestoState;
  onSaveAndContinue: (e: FormEvent<HTMLButtonElement>, param: string) => void;
};
const NavButton = ({ onSaveAndContinue, state: { active } }: Props) => {
  return (
    <div>
      <Button
        className={active === "restaurent" ? "btn-pink" : "btn-default"}
        onClick={(e: FormEvent<HTMLButtonElement>) =>
          onSaveAndContinue(e, "restaurent")
        }
        type='button'
      >
        Restaurent
      </Button>
      <Button
        className={active === "contact" ? "btn-pink" : "btn-default"}
        onClick={(e: FormEvent<HTMLButtonElement>) =>
          onSaveAndContinue(e, "contact")
        }
        type='button'
      >
        Contacts
      </Button>
      <Button
        className={active === "address" ? "btn-pink" : "btn-default"}
        onClick={(e: FormEvent<HTMLButtonElement>) =>
          onSaveAndContinue(e, "address")
        }
        type='button'
      >
        Address
      </Button>
      <Button
        className={active === "upload" ? "btn-pink" : "btn-default"}
        onClick={(e: FormEvent<HTMLButtonElement>) =>
          onSaveAndContinue(e, "upload")
        }
        type='button'
        variant='contained'
      >
        Upload
      </Button>
    </div>
  );
};

export default NavButton;

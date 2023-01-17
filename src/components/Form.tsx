import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import PhoneNumber, { Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface ITargetLite {
    name: string;
    value: Value;
}

interface IEventLite {
    target: ITargetLite;
}

interface IFormValues {
    name: string;
    surname: string;
    phoneNumber: string;
    customPhoneNumber: string;
}

export const Form: FC = () => {
    const initialState: IFormValues = {
        name: "",
        surname: "",
        phoneNumber: "",
        customPhoneNumber: "+34",
    };
    const [formValues, setFormValues] = useState<IFormValues>(initialState);
    const [bustedPhoneNumber, setBustedPhoneNumber] = useState<Value>(initialState.customPhoneNumber);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const onChangeValue = (event: ChangeEvent<HTMLInputElement> | IEventLite) => {
        console.log(event.target.name, "is changing!! ");
        // setFormValues({...formValues,[event.target.name: event.target.value]})
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" onChange={onChangeValue} />
            </div>
            <div>
                <label htmlFor="surname">Surname</label>
                <input id="surname" name="surname" type="text" onChange={onChangeValue} />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input id="phoneNumber" name="phoneNumber" type="text" onChange={(e) => onChangeValue(e)} />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                {/* <PhoneNumber value={bustedPhoneNumber} onChange={setBustedPhoneNumber as any} /> */}
                <PhoneNumber
                    value={bustedPhoneNumber}
                    onChange={(e) => {
                        onChangeValue({ target: { name: "customPhoneNumber", value: e } } as IEventLite);
                    }}
                />
            </div>
            <button type="submit">Submit</button>
            <hr />
            <p>formValues::{JSON.stringify(formValues)}</p>
            <p>bustedPhoneNumber::{bustedPhoneNumber}</p>
        </form>
    );
};

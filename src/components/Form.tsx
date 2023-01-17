import { ChangeEvent, FC, FormEvent, useState } from "react";
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

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const onChangeValue = (event: ChangeEvent<HTMLInputElement> | IEventLite) => {
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
                <PhoneNumber
                    value={formValues.customPhoneNumber}
                    onChange={(e) => {
                        onChangeValue({ target: { name: "customPhoneNumber", value: e } } as IEventLite);
                    }}
                />
            </div>
            <button type="submit">Submit</button>
            <hr />
            <p>formValues::{JSON.stringify(formValues)}</p>
        </form>
    );
};

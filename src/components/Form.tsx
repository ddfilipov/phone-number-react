import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import PhoneNumber from "react-phone-number-input";
import "react-phone-number-input/style.css";

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
        customPhoneNumber: "",
    };
    const [formValues, setFormValues] = useState<IFormValues>(initialState);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("I'm changing!! ", event.target.name);
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
                <input id="phoneNumber" name="phoneNumber" type="text" onChange={onChangeValue} />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <PhoneNumber value={formValues.customPhoneNumber} onChange={() => {}} />
            </div>
            <button type="submit">Submit</button>
            <hr />
            {JSON.stringify(formValues)}
        </form>
    );
};

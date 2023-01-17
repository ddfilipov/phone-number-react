import { ChangeEvent, FC, FormEvent, useState } from "react";

interface IFormValues {
    name: string;
    surname: string;
    phoneNumber: string;
}

export const Form: FC = () => {
    const initialState: IFormValues = {
        name: "",
        surname: "",
        phoneNumber: "",
    };
    const [formValues, setFormValues] = useState<IFormValues>(initialState);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("I'm changing!! ", event.target.name);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" />
            </div>
            <div>
                <label htmlFor="surname">Surname</label>
                <input id="surname" type="text" />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input id="phoneNumber" type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

import { FC, FormEvent } from "react";

export const Form: FC = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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

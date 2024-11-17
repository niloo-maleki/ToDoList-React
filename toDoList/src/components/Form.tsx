import { useState } from "react";
import Button from "./Button";

interface IFormProps {
    addTextToCards: (value: string) => void;
}

const Form = (props: IFormProps) => {
    const { addTextToCards } = props;
    const [text, setText] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const addItemHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTextToCards(text);
        setText("");
    };

    return (
        <div className="grid gap-8 p-9 w-4/5 m-auto rounded-md">
            <div className="flex items-center justify-center font-bold text-2xl">
                <strong className="bg-purple-50 px-14 py-4 rounded-lg ring-2 ring-purple-600 ring-offset-4 ring-offset-purple-300">
                    To Do List
                </strong>
            </div>
            <form className="flex" onSubmit={(e) => addItemHandler(e)}>
                <input
                    type="text"
                    name="value"
                    value={text}
                    placeholder="Type Text"
                    onChange={(e) => handleChange(e)}
                    className="block p-4 w-3/4 text-sm m-auto text-gray-900 bg-fuchsia-50 rounded-lg border border-gray-300 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                />
                <Button
                    type="submit"
                    className="bg-pink-600 my-1 !px-9 text-white rounded-md border-2 ring-rose-100 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium text-sm"
                >
                    Add
                </Button>
            </form>
        </div>
    );
};

export default Form;

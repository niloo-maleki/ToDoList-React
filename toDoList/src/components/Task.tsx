import { useEffect, useRef } from "react";
import ActionButton from "./ActionButton";

interface ITaskProps {
    id: number;
    index: number;
    text: string;
    isDone: boolean;
    isEditing: boolean;
    toggleDone: (id: number) => void;
    deleteTask: (id: number) => void;
    toggleButton: (id: number, newText?: string) => void;
}

const Task = (props: ITaskProps) => {
    const { id, text, isDone, isEditing, toggleDone, deleteTask, toggleButton, index } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            console.log('isEditing', isEditing)
            inputRef.current.focus();
        }
        return
    }, [isEditing]);

    const buttons = [
        {
            label: isDone ? "Undo" : "Done",
            onClick: () => toggleDone(id),
            className: "bg-green-500 hover:bg-green-600",
        },
        {
            label: "Delete",
            onClick: () => deleteTask(id),
            className: "bg-red-500 hover:bg-red-600",
        },
        {
            label: isEditing ? "Save" : "Edit",
            onClick: () => {
                const newText = isEditing && inputRef.current ? inputRef.current.value : undefined;

                toggleButton(id, newText);
            },
            className: "bg-blue-500 hover:bg-blue-600",
        },
    ];

    return (
        <div className="flex w-full items-center justify-between p-4 bg-purple-100 rounded-lg shadow-md border">
            {isEditing ? (
                <input
                    type="text"
                    ref={inputRef}
                    defaultValue={text}
                    className="p-4 border rounded-md w-full mr-3 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                />
            ) : (
                <div className="flex items-center gap-1">
                    <span className="font-bold text-purple-600">{index}.</span>
                    <span
                        className={`"flex items-center gap-1" ${isDone ? "line-through text-gray-400" : ""}`}
                    >
                        {text}
                    </span>
                </div>
            )}
            <div className="flex justify-center items-center gap-2">
                {buttons.map((button, i) => (
                    <ActionButton
                        key={i}
                        label={button.label}
                        onClick={button.onClick}
                        className={button.className}
                    />
                ))}
            </div>
        </div>
    );
};

export default Task;

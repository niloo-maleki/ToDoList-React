import { useState } from "react";
import Form from "./Form";
import Task from "./Task";

interface ITask {
    id: number;
    text: string;
    isDone: boolean;
    isEditing: boolean;
}

const TaskCard = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);

    const addTask = (text: string) => {
        if (text.trim() !== "") {
            setTasks((prev) => [
                ...prev,
                { id: Date.now(), text, isDone: false, isEditing: false },
            ]);
        }
    };

    const deleteTask = (id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const toggleDone = (id: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, isDone: !task.isDone } : task
            )
        );
    };

    const toggleButton = (id: number, newText?: string) => {
        setTasks((prev) =>
            prev.map((task) => {
                if (task.id === id) {
                    if (task.isEditing) {
                        if (newText?.trim()) {
                            return { ...task, text: newText.trim(), isEditing: false };
                        } else {
                            deleteTask(id); 
                            return task; 
                        }
                    }
                    return { ...task, isEditing: !task.isEditing };
                }
                return task;
            })
        );
    };

    return (
        <>
            <Form addTextToCards={addTask} />
            <div className="flex flex-col gap-2 items-center px-9">
                {tasks.map((task, index) => (
                    <Task
                        key={task.id}
                        index={index + 1}
                        id={task.id}
                        text={task.text}
                        isDone={task.isDone}
                        isEditing={task.isEditing}
                        toggleDone={toggleDone}
                        deleteTask={deleteTask}
                        toggleButton={toggleButton}
                    />
                ))}
            </div>
        </>
    );
};

export default TaskCard;

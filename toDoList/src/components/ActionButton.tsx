import Button from "./Button";

interface ActionButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
}

const ActionButton = (props: ActionButtonProps) => {
    const { label, onClick, className } = props
    return (
        <Button

            className={`p-2 rounded-md text-white font-medium ${className}`}
            onClick={onClick}
        >
            {label}
        </Button>
    );
};

export default ActionButton;

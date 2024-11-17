import React, { useRef } from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label?: string;
};

const Button = (props: ButtonProps) => {
    const { children,
        onClick,
        label,
        className = "",
        disabled = false,
        ...rest } = props;
        
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <button
            ref={buttonRef}
            onClick={onClick}
            disabled={disabled}
            className={`rounded-md flex items-center justify-center px-2 text-sm font-medium 
            ${disabled && "cursor-not-allowed opacity-50"} 
            ${className}`}
            {...rest}
        >
            {label || children}
        </button>
    );
};

export default Button;

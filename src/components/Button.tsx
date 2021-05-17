import React from "react";

type IButtonProps = {
    xl?: boolean;
    children: string;
};

const Button = (props: IButtonProps) => (
    <button
        className={
            "px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        }
    >
        {props.children}
    </button>
);

const BigButton = (props: IButtonProps) => (
    <button
        className={
            "px-5 py-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 text-lg"
        }
    >
        {props.children}
    </button>
);

export { Button, BigButton };

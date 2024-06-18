import React from "react";

export interface ButtonPropsType extends React.HTMLProps<HTMLButtonElement> {
    type?: "button" | "submit" | "reset";
}
const Button = ({type,...props}:ButtonPropsType) => (
    <button className="button" type={type || "button"} {...props} />
);

export default Button;

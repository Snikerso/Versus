import React, { ButtonHTMLAttributes } from "react";
import {Button} from "./Styles"
interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{

}

export const ButtonCenter: React.FC<Props> = (props) => {
    return <Button {...props} >X</Button>
}
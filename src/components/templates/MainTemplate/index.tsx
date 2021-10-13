import React from "react";
import {Wrapper} from "./Styles";

interface Props {
    children: JSX.Element[];
}

export const MainTemplate: React.FC<Props> = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
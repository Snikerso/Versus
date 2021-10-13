import React from "react";
import { Wrapper } from "./Styles";
import { WrapperInner } from "./Styles"

interface Props {
    Header: JSX.Element;
    ButtonOne: JSX.Element;
    ButtonTwo: JSX.Element;
}

export const SectionTemplate: React.FC<Props> = ({ Header, ButtonOne, ButtonTwo }) => {
    return (
    <Wrapper>
        {Header}
        <WrapperInner>
            {ButtonOne}
            {ButtonTwo}
        </WrapperInner>
    </Wrapper>
        
    )
}
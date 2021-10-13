import React, { ButtonHTMLAttributes, useState } from "react";
import { ButtonCenter } from "../../atoms/StyledComponents/ButtonCenter";
import { ButtonOutside } from "../../atoms/StyledComponents/ButtonOutside";
import { Wrapper } from "./Styles"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{

}

export const ButtonQuadro: React.FC<Props> = (props) => {
    const [activeElement, setActiveElement] = useState<number | null>(null)
    return(
        <Wrapper>
            <ButtonOutside position={2} activeElement={activeElement} setActiveElement={setActiveElement}/>
            <ButtonOutside position={3} activeElement={activeElement} setActiveElement={setActiveElement}/>
            <ButtonOutside position={1} activeElement={activeElement} setActiveElement={setActiveElement}/>
            <ButtonOutside position={0} activeElement={activeElement} setActiveElement={setActiveElement}/>
            <ButtonCenter {...props} />
        </Wrapper>
    )
}
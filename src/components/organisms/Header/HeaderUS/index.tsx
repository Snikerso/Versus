import React, { SetStateAction } from "react";
import { Head } from "../../../atoms/Head";
import { ButtonQuadroUS } from "../../../molecules/ButtonQuadroUS";
import { Wrapper } from "./Styles";

interface Props {
    isMutated: boolean;
    setIsMutated: React.Dispatch<SetStateAction<boolean>>;
}

export const HeaderUS: React.FC<Props> = ({ isMutated, setIsMutated}) => {
    return(
        <Wrapper isMutated={isMutated}>
            <ButtonQuadroUS onClick={()=>setIsMutated(prev => !prev)} />
            <Head as={"h1"}>{"ScrumGenerator"}</Head>
        </Wrapper>
    )
}
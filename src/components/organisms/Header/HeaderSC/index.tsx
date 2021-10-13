import React, { SetStateAction } from "react";
import { Head } from "../../../atoms/Head";
import { ButtonQuadro } from "../../../molecules/ButtonQuadro";
import { Wrapper } from "./Styles";

interface Props {
    isMutated: boolean;
    setIsMutated: React.Dispatch<SetStateAction<boolean>>;
}

export const HeaderSC: React.FC<Props> = ({ isMutated, setIsMutated}) => {
    return(
        <Wrapper isMutated={isMutated}>
            <ButtonQuadro onClick={()=>setIsMutated(prev => !prev)} />
            <Head as={"h1"}>{"ScrumGenerator"}</Head>
        </Wrapper>
    )
}
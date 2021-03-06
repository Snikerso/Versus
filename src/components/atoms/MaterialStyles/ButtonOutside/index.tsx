import React, { SetStateAction } from "react";
import { Svg } from "./Styles";

interface Props {
    position: number;
    activeElement:number |null;
    setActiveElement: React.Dispatch<SetStateAction<number |null>>;
}

export const ButtonOutside: React.FC<Props> = ({ position, activeElement, setActiveElement }) => {

    const handleClick = () => {
        setActiveElement(position)
    }

    return(
        <Svg isActive={activeElement === position} onClick={()=> handleClick()} position={position} width="64" height="50" viewBox="0 0 64 50"  xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M25.6338 0C23.4247 0 21.6338 1.79086 21.6338 4V7.96969V14.3196C21.6338 15.7832 20.4597 16.9697 19.0114 16.9697H12.6338H4C1.79087 16.9697 3.8147e-06 18.7605 3.8147e-06 20.9697V37V46.0606C3.8147e-06 48.2363 1.74883 50 3.90611 50H13H51H60.0939C62.2512 50 64 48.2363 64 46.0606V37V13V3.93939C64 1.76373 62.2512 0 60.0939 0H51H25.6338Z" />
        </Svg>
    )
}
import styled, { css } from 'styled-components'

export const Svg = styled.svg<{position: number, isActive: boolean}>`

    fill: grey;
    /* overflow: hidden; */

    :hover{
        path{
            stroke: white;
            stroke-width: 1px;
        }
    }


    ${({isActive}) => isActive && css`
        fill: #3DE2AE;
    ` }

    ${({position})=> {
        switch(position){
            case 2:{
                return (
                    css`
                        transform: scale(1, 1) rotate(180deg);
                    `
                )
            }
            case 3:{
                return (
                    css`
                        transform: scale(-1, 1) rotate(180deg);
                    `
                )
            }
            case 1:{
                return (
                    css`
                        transform: scale(1, -1) rotate(180deg);
                    `
                )
            }
        }
    }}
    
`
import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{isMutated:boolean}>`
    display: flex;
    justify-content: space-between;
    background-color: black;
    padding: 20px;
    width: 100%;
    height: 100px;
    
    ${({isMutated}) => isMutated && css`
        > :first-child{
            order:1;
        }
    `}
`
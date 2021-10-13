import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;

    > :last-child{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

`
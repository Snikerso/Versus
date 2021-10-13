import styled, { css } from 'styled-components'

export const Button = styled.button`
    position: relative;
    display: flex;
    background-color: grey;
    border:none;
    outline: none;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    color:white;
    width:44px;
    height: 34px;
    overflow: hidden;

    :after {
        content: "";
        background: white;
        display: block;
        position: absolute;
        padding-top: 300%;
        padding-left: 350%;
        margin-left: -20px!important;
        margin-top: -120%;
        opacity: 0;
        transition: all 0.8s
    }

    :active:after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s
    }
`
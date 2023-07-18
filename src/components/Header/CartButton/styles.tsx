import { styled } from "styled-components";

export const CartButtonContainer = styled.div`
    width: 2.375rem;
    height: 2.375rem;
    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: end;   
    transition: background-color 0.5s;
    transition: color 0.5;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:hover{
        background-color: ${props => props.theme['yellow-dark']};
        color: ${props => props.theme['yellow-light']};        
    }
`;

export const NumberItens = styled.div`
    height: 1.25rem;
    width: 1.25rem;
    background-color: ${props => props.theme['yellow-dark']};
    color: ${props => props.theme['yellow-light']};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -1.875rem;
    margin-right: -0.81rem;
`;
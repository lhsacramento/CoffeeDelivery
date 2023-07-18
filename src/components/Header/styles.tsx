import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    padding: 2rem 7vw;
    justify-content: space-between;
    align-items: center;   
    background: ${props => props.theme['background']};   
    
    a{
        text-decoration: none;
    }
`;

export const LocationAndCartButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.75rem;         
    font-size: 0.875rem;
    height: 2.375rem;
    justify-content: space-evenly;    
    background: transparent;
    border: none;
    cursor: pointer;
`;

export const LocationContainer = styled.div`
    background-color: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple']};
    width: 12rem;
    display: flex;
    align-items: center;
    border-radius: 6px;    
    height: 2.375rem;
    justify-content: center;
    gap: 1rem;
    transition: background-color 1s;
    transition: color 0.5s;

    &:hover{
        background-color: ${props => props.theme['purple']};
        color: ${props => props.theme['purple-light']};
    }
        
    span{
        padding-left: 0.25rem;
    } 
`;
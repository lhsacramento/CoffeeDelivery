import { styled } from "styled-components";

export const CoffeeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 16rem;
    height: 19.38rem;
    background-color: ${props => props.theme['base-card']};
    border-radius: 6px 36px 6px 36px;
    align-items: center;

    img{
        width: 7.5rem;
        height: 7.5rem;
        margin-top: -1.25rem;
        font-weight: bold;
    }
    
    h2{
        font-family: 'Baloo 2', monospace;
        font-size: 1.25rem;
        margin-top: 1.25rem;
    }

    p{
        margin-top: 0.5rem;
        text-align: center;
        font-size:  0.875rem; 
        color: ${props => props.theme['base-label']};
        width: 90%;
    }
`;

export const TypeCoffee = styled.span`
    background-color: ${props => props.theme['yellow-light']};    
    border-radius: 8px;
    padding: 0 0.5rem;
    font-size: 0.625rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 1rem;
    display: flex;
    gap: 2rem;
    color: ${props => props.theme['yellow-dark']};
    display: flex;
    justify-content: center;
`;

export const ButtonsCard = styled.div`
    display: flex;
    margin-top: auto;
    padding-bottom: 1rem;    
    justify-content: space-evenly;
    width: 100%;
`;

export const PriceLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme['base-text']};
    font-size: 0.875rem;
    
    span{
        padding-left: 0.5rem;
        font-size: 2rem;
        font-family: 'Baloo 2', monospace;
    }
`;

export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: ${props => props.theme['base-button']};
    gap: 0.5rem;
    border-radius: 8px;
    width: 4.5rem;

    button{
        border: none;
        background: transparent;
        color: ${props => props.theme['purple']};
        cursor: pointer;

        &:hover{
            color: ${props => props.theme['purple-dark']};
        }
    }
`;

export const CoffeeCardCartButton = styled.button`
    height: 2.375rem;
    width: 2.375rem;
    background: ${props => props.theme['purple-dark']};
    border-radius: 8px;
    color: ${props => props.theme['white']};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.5s;
    cursor: pointer;
    border: none;

    &:hover{
        background: ${props => props.theme['purple']};
    }
`;

export const TypesCoffeeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;
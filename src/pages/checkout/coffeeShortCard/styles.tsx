import { styled } from "styled-components";

export const ShortCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 23rem;
    padding: 2rem 0.25rem 2rem 0.25rem;
    border-bottom: 1px solid ${props => props.theme['base-button']};

    &:first-child{
        padding-top: 0.5rem;
    }

    &>div{
        display: flex;
        gap: 1.25rem;

        >img{
            width: 4rem;
            height: 4rem;
        }
    }

    &>span{
        font-weight: bold;
    }


    @media (max-width: 1170px) {
        width: 100%;
    }

    @media (max-width: 450px) {
        flex-direction: column;

        &>div{
            gap: 0;
            justify-content: space-between;
            width: 100%;
        }
    }
`;

export const CoffeeInformations = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 0.5rem;

    >span{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }

    &>div{
        display: flex;
        gap: 0.5rem;        
        height: 2rem;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 450px) {
        &>div{
            flex-direction: column;
            width: 100%;
            align-items: center;
        }
    }
`;

export const ButtonAmout = styled.div`
    display: flex;
    padding: 0.5rem;
    gap: 0.25rem;
    align-items: start;
    background: ${props => props.theme['base-button']};
    border-radius: 6px;

    &>button{
        background: transparent;
        border: none;
        color: ${props => props.theme['purple']};
        height: 0.875rem;
        cursor: pointer;

        &:hover{
            color: ${props => props.theme['purple-dark']};
        }
    }

    &>span{
        text-align: center;
        vertical-align: center;
        line-height: 1;
        color: ${props => props.theme['base-text']}
    }
`;

export const ButtonRemove = styled.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;    
    background: ${props => props.theme['base-button']};    
    padding: 0.5rem;
    border-radius: 6px;
    border: none;
    height: 2rem;
    color: ${props => props.theme['purple']};
    cursor: pointer;
    transition: background 0.5s;

    &:hover{
        background: ${props => props.theme['base-hover']};  
    }

    &>span{
        color: ${props => props.theme['base-text']}
    }

    
`;


import { styled } from "styled-components";

export const CheckoutContainer = styled.main`
    padding: 2.5rem 7vw;
    display: flex;
    width: 100%;
    gap: 2rem;
    padding-bottom: 0;

    @media (max-width: 1170px) {
        flex-direction: column;

        &>div{
            width: 100%;
            max-width: 100%;
        }
    }
`;

export const DeliveryPlaceContainer = styled.div`
    width: 60%;
    max-width: 530px;
    border-radius: 6px;
    
    h2{
        font-size: 1.125rem;
        font-family: 'Baloo 2', monospace;
    }
`;

export const PriceCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;


export const DeliveryPlaceContent = styled.div`
    padding: 2.5rem;    
    background-color: ${props => props.theme['base-card']};

    svg{
            color: ${props => props.theme['yellow-dark']}
    }

    .info{
        display: flex;
        gap: 0.5rem;

        h3{
            font-weight: normal;
        }
        p{
            font-size: 0.875rem;
        }
    }
`;

export const FormDeliveryPlace = styled.form`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    #cep, #telefone, #cidade{
        flex: 1;
    }

    #rua{
        width: 100%;
    }

    #numero{
        width: 25%;

        @media (max-width: 450px) {
            width: 50%;
        }
    }

    #complemento{
        flex: 60%;
    }

    #uf{
        width: 10%;

        @media (max-width: 450px) {
            width: 20%;
        }
    }

    input{
        resize: none;
        font-size: 0.875rem;
        height: 2.625rem;
        border: none;
        background-color: ${props => props.theme['base-input']};
        border-radius: 4px;
        border-collapse: collapse;
        padding-left: 0.75rem;
    }
`;

export const PaymentMethodesContainer = styled.div`
    margin-top: 0.75rem;
    padding-top: 2.5rem;

    svg{
        color: ${props => props.theme['purple-dark']};
    }    
`;

export const PaymentButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;  
    
    @media (max-width: 1170px) {
        justify-content: space-evenly;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 1rem;
    }
    
`;

interface ButtonProps{
    selected: boolean,
}

export const MathodPaymentButton = styled.button<ButtonProps>`
    font-size: 0.7rem;
    line-height: 1.6;
    padding: 0.5rem 0.7rem;
    border: 1px solid transparent;
    border-color: ${props => props.selected === true ? props.theme['purple'] : null}; 
    background-color: ${props => props.selected === true ? props.theme['purple-light'] : props.theme['base-button']};
    border-radius: 8px;
    text-transform: uppercase;
    color: ${props => props.theme['base-text']};
    cursor: pointer;
    display: flex;
    justify-content: cemter;
    align-items: center;
    gap: 0.5rem;

    &:hover{
        background-color: ${props => props.selected ? props.theme['purple-light'] : props.theme['base-hover']};
        color: $${props => props.selected ? props.theme['base-text'] : props.theme['base-subtitle']}
    }
`;

export const SelectedCoffeesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    &>h2{
        font-family: 'Baloo 2', monospace;
        font-size: 1.125rem;
    }
`;

export const CardContentContainer = styled.div`
    height: 35rem;
    padding: 2.5rem;
    background: ${props => props.theme['base-card']};
    border-radius: 6px 44px 6px 44px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`;

export const CardsContainer = styled.div`
    height: 20.5rem;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;

export const TotalAmount = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
`;

export const CoffeeCardLabelInfo = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 15rem;

    @media (max-width: 450px) {
        min-width: 0;
    }
`;

export const CoffeeCardInfoContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button{
        display: flex;
        padding: 12px 8px;
        justify-content: center;
        align-items: center;
        border: none;
        cursor: pointer;
        background: ${props => props.theme['yellow']};
        color: ${props => props.theme['white']};
        border-radius: 6px;

        &:hover{
            background: ${props => props.theme['yellow-dark']};
        }
    }
`;
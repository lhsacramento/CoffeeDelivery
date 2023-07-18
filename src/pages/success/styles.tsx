import { styled } from "styled-components";

export const SuccessContainer = styled.main`
    padding: 5rem 7vw;
    
    h1{
        font-size: 2rem;
        font-family: 'Baloo 2', monospace;
        color: ${props => props.theme['yellow-dark']};
    }
    
    p{
        font-size: 1.25rem;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.5rem;
`;

export const OrderInfo = styled.div`
    background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, ${props => props.theme['yellow-dark']}, ${props => props.theme['purple-dark']}) border-box;
    border-radius: 6px 36px 6px 36px;
    border: 2px solid transparent;
    padding: 2rem;
    gap: 2rem;
    display: flex;
    flex-direction: column;
`;

export const TopicOrderInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const BaseIconContainer = styled.div`
    min-height: 2rem;
    min-width: 2rem;
    border-radius: 50%;
    color: ${props => props.theme['white']};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MapPinIconContainer = styled(BaseIconContainer)`
    background-color: ${props => props.theme['purple']};
`;

export const TimerIconContainer = styled(BaseIconContainer)`
    background-color: ${props => props.theme['yellow']};
`;

export const DollarIconContainer = styled(BaseIconContainer)`
    background-color: ${props => props.theme['yellow-dark']};
`;


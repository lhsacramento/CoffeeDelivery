import { styled } from "styled-components";

export const HomeContainer = styled.main`
    padding: 0 7vw;    
`;

export const IntroContainer = styled.section`
    min-height: 34rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        font-family: 'Baloo 2', monospace;
        font-size: 3rem;
    }

    p{
        margin-top: 1rem;
        font-size: 1.25rem;
    }

    img{
        height: 360px;
        width: 476px;
    }    

    @media (max-width: 970px) {
        flex-direction: column-reverse;
    }

    @media (max-width: 450px) {
        &>img{            
            scale: 70%;
        }

        &>div>h1{
            font-family: 'Baloo 2', monospace;
            font-size: 2rem;
        }

        &>p{
            margin-top: 1rem;
            font-size: 1rem;
        }
    }
`;

export const BenefitsContainer = styled.div`
    margin-top: 4.1rem;
    display: grid;
    grid-template-areas:
        'one two'
        'three four'
    ;
    gap: 1rem;

    @media (max-width: 450px){
        display: flex;
        flex-direction: column;
    }
`;

const BaseTextConteiner = styled.span`
    display: flex;
    align-items: center;
    gap: 1rem;
    
    div{        
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        min-width: 2rem;
        min-height: 2rem;
        color: ${props => props.theme['white']};
    }
`;

export const SecurityBuyTextContainer = styled(BaseTextConteiner)`
    div{
        background-color: ${props => props.theme['yellow-dark']};
    }
`;

export const FastDeliveryTextContainer = styled(BaseTextConteiner)`
    div{
        background-color: ${props => props.theme['yellow']};
    }
`;

export const PackageTextContainer = styled(BaseTextConteiner)`
    div{
        background-color: ${props => props.theme['base-text']};
    }
`;

export const CoffeeTextContainer = styled(BaseTextConteiner)`
    div{
        background-color: ${props => props.theme['purple']};
    }
`;

export const CoffeeListSection = styled.section`
    h1{
        font-size: 2rem;
        font-family: 'Baloo 2', monospace;
    }

    @media (max-width: 930px){
        margin-top: 4rem;
    }
`;

export const CoffeeListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px,1fr));
    margin-bottom: 10rem;
    margin-top: 3.375rem;
    gap: 2rem;
    flex-wrap: wrap;
`;
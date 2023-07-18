import { ContentContainer, DollarIconContainer, MapPinIconContainer, OrderInfo, SuccessContainer, TimerIconContainer, TopicOrderInfo } from './styles';
import checkoutImg from '../../assets/img/checkoutImg.png';
import {MapPin, Timer, CurrencyDollar} from '@phosphor-icons/react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function SuccessPage(){
    
    const {delivery} = useContext(CartContext);

    return (
        <SuccessContainer>
            <h1>Uhu! Pedido Confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>

            <ContentContainer>
                <OrderInfo>
                    <TopicOrderInfo>
                        <MapPinIconContainer>
                            <MapPin weight='fill' size={16}/>
                        </MapPinIconContainer>
                        <span>Entrega em <b>{`
                        rua ${delivery?.address.rua}, 
                        ${delivery?.address.numero},
                        ${delivery?.address.complemento ? delivery?.address.complemento + ',' : ''}
                        ${delivery?.address.bairro} - 
                        ${delivery?.address.cidade}, 
                        ${delivery?.address.uf} `}</b></span>
                    </TopicOrderInfo>

                    <TopicOrderInfo>
                        <TimerIconContainer>
                            <Timer weight='fill' size={16}/>
                        </TimerIconContainer>
                        <span>Previsão de Entrega <br/> <b>20 min - 30 min</b></span>
                    </TopicOrderInfo>

                    <TopicOrderInfo>
                        <DollarIconContainer>
                            <CurrencyDollar weight='fill' size={16}/>
                        </DollarIconContainer>
                        <span>Pagamento na entrega <br/> <b>{delivery?.methodPayment}</b></span>
                    </TopicOrderInfo>                    
                </OrderInfo>  
                <img src={checkoutImg} />
            </ContentContainer>
        </SuccessContainer>
    );
}
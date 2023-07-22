import { CardContentContainer, CardsContainer, CheckoutContainer, CoffeeCardInfoContainer, CoffeeCardLabelInfo, DeliveryPlaceContainer, DeliveryPlaceContent, FormDeliveryPlace, MathodPaymentButton, PaymentButtonsContainer, PaymentMethodesContainer, SelectedCoffeesContainer, TotalAmount} from './styles';
import { MapPinLine, CurrencyDollar, CreditCard, Bank , Money} from '@phosphor-icons/react';
import { useContext, useEffect, useState } from 'react';
import { IMaskInput } from 'react-imask';
import { ShortCardCoffee } from './coffeeShortCard';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { DeliveryContext } from '../../contexts/DeliveryContext';
 
export function CheckoutPage(){

    const navigate = useNavigate();
    const {cartItens, resetCart} = useContext(CartContext);
    const { setDeliveryLocation } = useContext(DeliveryContext);

    const [creditCardButtonSelected, setCreditCardButtonSelected] = useState(false);
    const [debitCardButtonSelected, setDebitCardButtonSelected] = useState(false);
    const [moneyButtonSelected, setMoneyButtonSelected] = useState(true);

    const [cepValue, setCepValue] = useState('');
    const [telefoneValue, setTelefoneValue] = useState('');
    const [ruaValue, setRuaValue] = useState('');
    const [complementoValue, setComplementoValue] = useState('');
    const [bairroValue, setBairroValue] = useState('');
    const [cidadeValue, setCidadeValue] = useState('');
    const [ufValue, setUfValue] = useState('');
    const [numeroValue, setNumeroValue] = useState('');

    const [totalPriceItens, setTotalPriceItens] = useState(0);
    
    useEffect(() => {
        calculateTotalPriceItens();
    },[cartItens]);
    
    function calculateTotalPriceItens(){
        let sumTotalPrice = 0;
        if(cartItens){            
            for(let iten of cartItens){
                sumTotalPrice += iten.amount * iten.price;
            }
        }
        console.log(sumTotalPrice);
        setTotalPriceItens(sumTotalPrice);
    }    

    function handleSelectPaymentMathod({target}: any){
        if(target.id === 'credCard'){
            setCreditCardButtonSelected(true);
            setDebitCardButtonSelected(false);
            setMoneyButtonSelected(false);
        }

        if(target.id === 'debitCard'){
            setDebitCardButtonSelected(true);
            setCreditCardButtonSelected(false);
            setMoneyButtonSelected(false);
        }

        if(target.id === 'money'){
            setMoneyButtonSelected(true);
            setCreditCardButtonSelected(false);
            setDebitCardButtonSelected(false);
        }
    }    

    function getMethodPayment(){
        if(creditCardButtonSelected) return 'Cartão de Crédito';
        if(debitCardButtonSelected) return 'Cartão de Débito';
        else return 'Dinheiro';
    }

    function handleSubmitDelivery(){
        if(validateFields()){
            const deliveryInfo = {
                address: {
                    cep: cepValue,
                    rua: ruaValue,
                    numero: numeroValue,
                    bairro: bairroValue,
                    cidade: cidadeValue,
                    complemento: complementoValue,
                    uf: ufValue,
                },
                phone: telefoneValue,
                methodPayment: getMethodPayment(),
            };    

            setDeliveryLocation(deliveryInfo); 
            resetCart();
            navigate('/success');
            
        }else{
            alert('Preencha todos os campos corretamente!');
        }
    }
    
    function validateFields(){
        if(cepValue.length === 10){
            if(telefoneValue.length === 15){
                if(ruaValue.length > 0){
                    if(numeroValue.length > 0){
                        if(bairroValue.length > 0){
                            if(cidadeValue.length > 0){
                                if(ufValue.length > 0){
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
        return false;
    }   


    return (
        <CheckoutContainer>
            <DeliveryPlaceContainer> 
                <h2>Complete seu pedido</h2>
                <DeliveryPlaceContent>
                    <div className='info'>
                        <MapPinLine size={22}/>
                        <div>
                            <h3>Endereço de entrega</h3>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>
                    <FormDeliveryPlace id='formLocation'>
                        <IMaskInput required id='cep' minLength={10} mask='00.000-000' placeholder='CEP' value={cepValue} onChange={(e) => setCepValue((e.target as HTMLInputElement).value)}/>
                        <IMaskInput required id='telefone'  minLength={15} placeholder='Celular' mask='(00) 00000-0000' value={telefoneValue} onChange={(e) => setTelefoneValue((e.target as HTMLInputElement).value)}/>
                        <IMaskInput required type='text' id='rua' placeholder='Rua' value={ruaValue} onChange={(e) => setRuaValue((e.target as HTMLInputElement).value)}/>
                        <IMaskInput required mask='000000' id='numero' placeholder='Número' value={numeroValue} onChange={(e) => setNumeroValue((e.target as HTMLInputElement).value)}/>
                        <IMaskInput type='text' id='complemento' placeholder='Complemento' value={complementoValue} onChange={(e) => setComplementoValue((e.target as HTMLInputElement).value)}/>
                        <IMaskInput required type='text' id='bairro' placeholder='Bairro' value={bairroValue} onChange={(e) => setBairroValue((e.target as HTMLInputElement).value)}/>
                        <IMaskInput required type='text' id='cidade' placeholder='Cidade' value={cidadeValue} onChange={(e) => setCidadeValue((e.target as HTMLInputElement).value)}/>
                        <IMaskInput required type='text' id='uf' minLength={2} placeholder='UF' value={ufValue} onChange={(e) => setUfValue((e.target as HTMLInputElement).value)}/>
                    </FormDeliveryPlace>

                    <PaymentMethodesContainer>
                        <div className='info'>
                            <CurrencyDollar size={22}/>
                            <div>
                                <h3>Pagamento</h3>                            
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>

                        </div>
                        <PaymentButtonsContainer>
                            <MathodPaymentButton selected={creditCardButtonSelected} id='credCard' onMouseDown={handleSelectPaymentMathod}><CreditCard size={16}/>Cartão de Crédito</MathodPaymentButton>
                            <MathodPaymentButton selected={debitCardButtonSelected} id='debitCard' onMouseDown={handleSelectPaymentMathod}><Bank size={16}/>Cartão de Débito</MathodPaymentButton>
                            <MathodPaymentButton selected={moneyButtonSelected} id='money' onMouseDown={handleSelectPaymentMathod}><Money size={16}/>Dinheiro</MathodPaymentButton>
                        </PaymentButtonsContainer>
                    </PaymentMethodesContainer>
                </DeliveryPlaceContent>
            </DeliveryPlaceContainer>

            <SelectedCoffeesContainer>                
                <h2>Cafés Selecionados</h2>
                <CardContentContainer>
                    <CardsContainer>

                        {
                            cartItens?.map((iten)=>{
                                return (
                                    <ShortCardCoffee key={iten.name}  name={iten.name}/>
                                )
                            })                            
                        }                        
                    </CardsContainer>
                    <CoffeeCardInfoContainer>
                        <CoffeeCardLabelInfo>
                            <span>Total de itens</span>
                            <span>{`R$ ${totalPriceItens.toFixed(2)}`}</span>
                        </CoffeeCardLabelInfo>

                        <CoffeeCardLabelInfo>
                            <span>Entrega</span>
                            <span>R$ 3,50</span>
                        </CoffeeCardLabelInfo>

                        <TotalAmount>
                            <span>Total</span>
                            <span>{`R$ ${(totalPriceItens + 3.50).toFixed(2)}`}</span>
                        </TotalAmount>
                        <button onClick={handleSubmitDelivery}>Confirmar Pedido</button>
                    </CoffeeCardInfoContainer>
                </CardContentContainer>
            </SelectedCoffeesContainer>
        </CheckoutContainer>
    );
}
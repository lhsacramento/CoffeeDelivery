import { Minus, Plus, Trash } from "@phosphor-icons/react";
import {ButtonAmout, ButtonRemove, CoffeeInformations, ShortCardContainer} from './styles';
import { Coffees } from '../../../coffees';
import { CartContext } from "../../../contexts/CartContext";
import { useContext }  from 'react';

interface ShortCardCoffeeProps{
    name: string,
}

export function ShortCardCoffee({name}: ShortCardCoffeeProps){

    const coffee = Coffees.find((iten) => iten.name === name);
    const { addToCart, cartItens, removeToCart } = useContext(CartContext);

    const iten = cartItens?.find((iten) => {
        if(iten.name === name){
            return iten;
        }
    });

    return(
        <ShortCardContainer> 
            <div>
                <img src={coffee?.img}/>
                <CoffeeInformations>
                    <span>{coffee?.name}</span>
                    <div>
                        <ButtonAmout>
                            <button onClick={() => {
                                if(iten){
                                    addToCart({
                                        name: iten.name,
                                        amount: 1,
                                        price: iten.price,
                                        delivery :{
                                            address: {
                                                cep:  '',
                                                rua: '',
                                                numero:  '',
                                                bairro:  '',
                                                cidade:  '',
                                                complemento:  '',
                                                uf:  '',
                                            },
                                        phone:  '',
                                        methodPayment: '',
                                        } 
                                    })
                                }
                            }}><Plus size={14}/></button>
                            <span>{iten?.amount}</span>
                            <button onClick={() => {
                                if(iten && iten.amount > 1){
                                    addToCart({
                                        name: iten.name,
                                        amount: -1,
                                        price: iten.price,
                                        delivery :{
                                            address: {
                                                cep:  '',
                                                rua: '',
                                                numero:  '',
                                                bairro:  '',
                                                cidade:  '',
                                                complemento:  '',
                                                uf:  '',
                                            },
                                        phone:  '',
                                        methodPayment: '',
                                        } 
                                    })
                                }
                            }}><Minus size={14}/></button>
                        </ButtonAmout>

                        <ButtonRemove onClick={() => {
                            if(iten){
                                removeToCart({name: iten?.name});
                            }
                        }}>
                            <Trash size={16}/>
                            <span>Remover</span>
                        </ButtonRemove>
                    </div>
                </CoffeeInformations>
            </div>
            <span>{`R$ ${iten?.price.toFixed(2)}`}</span>
        </ShortCardContainer>
    );
}
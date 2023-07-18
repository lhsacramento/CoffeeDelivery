import { useContext, useState } from "react";
import { AmountContainer, ButtonsCard, CoffeeCardCartButton, CoffeeCardContainer, PriceLabel, TypeCoffee, TypesCoffeeContainer} from "./styles";
import {ShoppingCart, Plus, Minus} from '@phosphor-icons/react';
import { CartContext } from "../../../contexts/CartContext";

export interface CoffeeCardProps{
    name: string,
    img: string,
    type: string[],
    description: string,
    price: number,
}

export function CoffeeCard({name, img, type,description, price}: CoffeeCardProps){

    const [count, setCount] = useState(0);
    const {addToCart} = useContext(CartContext);

    function handleAddToCart(){
        if(count > 0){
            addToCart({
                name: name,
                amount: count,
                price: price,
            });

            setCount(0);
        }
    }

    return(
        <CoffeeCardContainer>
            <img src={img}/>

            <TypesCoffeeContainer>
                {
                    type.map((_type) => {
                        return(
                            <TypeCoffee key={_type}>{_type}</TypeCoffee>
                        );
                    })
                }
            </TypesCoffeeContainer>

            <h2>{name}</h2>
            <p>{description}</p>
            <ButtonsCard>
                <PriceLabel>                        
                    R$ <span>{price.toFixed(2)}</span>
                </PriceLabel>
                <AmountContainer>
                    <button 
                        onMouseDown={() => {
                          if(count > 0){
                                setCount(count - 1);
                            }
                    }}><Minus size={15} weight="bold"/></button>
                    {
                        count
                    }
                    <button 
                        onMouseDown={() => {
                          if(count < 99){
                                setCount(count + 1);
                            }
                    }}><Plus size={15} weight="bold"/></button>
                </AmountContainer>
                <CoffeeCardCartButton onClick={handleAddToCart}>
                    <ShoppingCart weight="fill" size={22}/>
                </CoffeeCardCartButton>
            </ButtonsCard>

        </ CoffeeCardContainer>
    );
}

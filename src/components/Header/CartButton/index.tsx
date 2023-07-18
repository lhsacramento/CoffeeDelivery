import { useContext } from 'react';
import { CartButtonContainer, NumberItens } from './styles';
import { ShoppingCart } from '@phosphor-icons/react';
import { CartContext } from '../../../contexts/CartContext';

export function CartButton(){
    const {cartItens} = useContext(CartContext);


    return(
        <CartButtonContainer>
            <div>
                <ShoppingCart size={22} weight='fill'/>
                <NumberItens>
                    {cartItens?.length}
                </NumberItens>
            </div>
        </CartButtonContainer>
    );
}
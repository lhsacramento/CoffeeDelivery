import { HeaderContainer, LocationAndCartButton, LocationContainer } from './styles';
import { MapPin } from '@phosphor-icons/react';
import { CartButton } from './CartButton';
import {LogoButton} from './LogoButton'
import { NavLink } from 'react-router-dom';
import { DeliveryContext } from '../../contexts/DeliveryContext';
import {useContext} from 'react';

export function Header(){

    const { delivery } = useContext(DeliveryContext);
    const myLocation = delivery ? `${delivery.address.cidade} - ${delivery.address.uf}` : 'Não Definida';
    


    return (
        <HeaderContainer>
            <NavLink to='/'>
                <LogoButton />
            </NavLink>
            <NavLink to='/checkout'>
                <LocationAndCartButton>
                    <LocationContainer>             
                        <MapPin weight='fill' size={22}></MapPin>
                        <span> {myLocation} </span>
                    </LocationContainer>
                    <div>
                        <CartButton />
                    </div>
                </LocationAndCartButton>
            </NavLink>
        </HeaderContainer>
    );
}
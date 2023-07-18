import { HeaderContainer, LocationAndCartButton, LocationContainer } from './styles';
import { MapPin } from '@phosphor-icons/react';
import { CartButton } from './CartButton';
import {LogoButton} from './LogoButton'
import { NavLink } from 'react-router-dom';

export function Header(){
    return (
        <HeaderContainer>
            <NavLink to='/'>
                <LogoButton />
            </NavLink>
            <NavLink to='/checkout'>
                <LocationAndCartButton>
                    <LocationContainer>             
                        <MapPin weight='fill' size={22}></MapPin>
                        <span> Rio de Janeiro - RJ</span>
                    </LocationContainer>
                    <div>
                        <CartButton />
                    </div>
                </LocationAndCartButton>
            </NavLink>
        </HeaderContainer>
    );
}
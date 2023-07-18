import { LogoContainer } from './styles';
import logo from '../../../assets/img/logo.png';

export function LogoButton(){
    return (
        <LogoContainer>
            <img src={logo}/>
        </LogoContainer>
    );
}
import { BenefitsContainer, CoffeeTextContainer,CoffeeListContainer, FastDeliveryTextContainer, HomeContainer, IntroContainer, PackageTextContainer, SecurityBuyTextContainer, CoffeeListSection } from './styles'
import IntroImg from '../../assets/img/introImg.png';
import {ShoppingCart, Timer, Package, Coffee} from '@phosphor-icons/react';
import { CoffeeCard } from './coffeeCard';
import {Coffees} from '../../coffees';
/////
export function HomePage(){

    const coffees = Coffees;

    return (
        <HomeContainer>
            <IntroContainer>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee delivery você receve seu café onde estiver, a qualquer hora</p>
                    <BenefitsContainer>
                        <SecurityBuyTextContainer> 
                            <div>                            
                                <ShoppingCart weight='fill' size={16}/> 
                            </div>
                            Compra simples e segura
                        </SecurityBuyTextContainer>
                        <FastDeliveryTextContainer> 
                            <div>                                
                                <Timer weight='fill'/> 
                            </div>
                            Entrega rápida e rastreada
                        </FastDeliveryTextContainer>
                        <PackageTextContainer> 
                            <div>                                
                                <Package weight='fill'/> 
                            </div>
                            Embalagem mantém o café intácto
                        </PackageTextContainer>
                        <CoffeeTextContainer> 
                            <div>                                
                                <Coffee weight='fill'/> 
                            </div>
                            O café chega fresquinho até você
                        </CoffeeTextContainer>
                    </BenefitsContainer>
                </div>
                <img src={IntroImg} alt="Um como de café com a logo da Coffee Delivery e grãos de café no fundo." />
            </IntroContainer>

            <CoffeeListSection>
                <h1>Nossos cafés</h1>

                <CoffeeListContainer>
                {
                    coffees.map(({name, img, type, description,price}) => {
                        return(
                            <CoffeeCard key={name} name={name} img={img} type={type} description={description} price={price} />
                        )
                    })
                }
                </CoffeeListContainer>
            </CoffeeListSection>
        </HomeContainer>
    );
}
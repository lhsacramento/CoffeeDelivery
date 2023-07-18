import {ReactNode, createContext, useState} from 'react';

export const CartContext = createContext({} as CartProps);

interface CartContextProviderProps{
    children: ReactNode;
}

interface ProductProps{
    name: string,
    amount: number,
    price: number,
    delivery: DeliveryProps,
}

interface DeliveryProps{
    address: {
        cep: string,
        rua: string,
        numero: string,
        bairro: string,
        cidade: string,
        complemento?: string,
        uf: string,
    },
    phone: string,
    methodPayment: string,
}

interface RemoveProps{
    name: string;
}

interface CartProps{
    cartItens: ProductProps[] | undefined,
    delivery: DeliveryProps | undefined,
    addToCart: (product: ProductProps) => void,
    removeToCart: (product: RemoveProps) => void,
    checkoutDone: (deliveryDone: DeliveryProps) => void,
}

export function CartContextProvider({children}: CartContextProviderProps){
    const [cartItens, setCartItens] = useState<ProductProps[]>([]);
    const [delivery, setDelivery] = useState<DeliveryProps | undefined>(undefined);
    
    function addToCart(product: ProductProps){

        const sameIten = cartItens.find((iten) => iten.name === product.name);

        if(sameIten){
            const cartItensCopy = cartItens.map((iten)=> {
                if(iten.name === product.name){
                    iten.amount += product.amount;
                }    
                return iten;
            });
            setCartItens([...cartItensCopy]);
        }else{            
            setCartItens([...cartItens, 
                {
                    name: product.name,
                    amount: product.amount,
                    price: product.price,
                }]
            );
        }
    }

    function removeToCart(product: RemoveProps){
        let newCart = [];

        if(cartItens){
            for(let iten of cartItens){
                if(iten.name !== product.name){
                    newCart.push(iten);
                }
            }
        }
        setCartItens(newCart);
    }

    function checkoutDone(deliveryDone: DeliveryProps){
        setDelivery(deliveryDone);
    }
    return(
        <CartContext.Provider value={{
            cartItens,
            addToCart,
            removeToCart,
            delivery,
            checkoutDone,
        }}>{children}</CartContext.Provider>
    );
}
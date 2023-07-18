import {ReactNode, createContext, useState} from 'react';

export const DeliveryContext = createContext({} as DeliveryCommands);

interface DeliveryContextProviderProps{
    children: ReactNode;
}

interface AddressProps{
    cep: string,
    rua: string,
    numero: string,
    bairro: string,
    cidade: string,
    complemento?: string,
    uf: string,
}

interface DeliveryCommands{
    delivery: DeliveryProps | undefined,
    setDeliveryLocation: (product : DeliveryProps) => void,
}

interface DeliveryProps{    
    address: AddressProps,
    phone: string,
    methodPayment: string,
}



export function CartContextProvider({children}: DeliveryContextProviderProps){
    const [delivery, setDelivery] = useState<DeliveryProps>();
    
    function setDeliveryLocation(product: DeliveryProps){
        setDelivery(product);
    }

    return(
        <DeliveryContext.Provider value={{
            delivery,
            setDeliveryLocation,
        }}>{children}</DeliveryContext.Provider>
    );
}
import { useState } from 'react';

interface UseCounterHook{
    valor: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

export const useCounterHook = ( counter: number ): UseCounterHook => {
    
    const [ valor, setValor ] = useState( counter );

    const increment = (): void => {
        setValor( valor + valor );
    }

    const decrement = (): void => {
        setValor( valor / 2 );
    }

    const reset = (): void => {
        setValor( counter );
    }

    return { valor, increment, decrement, reset };

}

import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = (category) => {

    const [state, setState] = useState({

        data: [],
        loading: true,

    });

    useEffect(() => {

        getGifs(category)
            .then(imgs => {


                setState({

                    data: imgs,
                    loading: false,
                });


            })
    }, [category]) //Se envía como segundo argumento un arreglo de dependencias. Si está vacío, la petición se ejecuta una sola vez
    //Es el equivalente a ComponentDidMount



    return state;
}

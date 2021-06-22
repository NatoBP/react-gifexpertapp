import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiffGridItem } from './GiffGridItem';


export const GiffGrid = ({ category }) => {

    const {data: images, loading} = useFetchGifs(category);
    //Cpn los dos puntos ':' se puede renombrar la variable

    return (
        <>
            <h3 className = 'animate__animated animate__fadeIn'>{category}</h3>
            
            {loading && <p className = 'animate__animated animate__flash'>Loading</p>}

            <div className='card-grid'>

                {
                    images.map(img => (   //Se mapean las imagenes devueltas y se ponen los elementos en una lista

                        <GiffGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>

        </>

    )
}

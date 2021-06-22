import React, { useState } from 'react';
import { AddCategorie } from './Components/AddCategorie';
import { GiffGrid } from './Components/GiffGrid';

export const GiffExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategorie setCategories={setCategories} />
            {/* Se pueden enviar propiedades a través de AddCategorie al archivo correspondiente */}

            <ol>
                {
                    categories.map(category =>
                        <GiffGrid
                            key={category}
                            category={category}
                        />

                    )
                }

            </ol>
        </>
    )
}


import React, { useState } from 'react';
import propTypes from 'prop-types';

export const AddCategorie = ({setCategories}) => {

    const [inputValue, setInputValue] = useState(''); //Le da un estado a la caja de texto
    //El InputValue es el último valor actualizado de lo que la persona escribió
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    AddCategorie.propTypes = {
        setCategories: propTypes.func.isRequired,
    }

    const handleSubmit = (e) => {

        e.preventDefault(); //Previene la recarga del navegador
        //console.log('Submit hecho')
        
        if(inputValue.trim().length > 2){

            setCategories(cats =>[inputValue, ...cats]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text" //Establece el tipo de dato de entrada
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

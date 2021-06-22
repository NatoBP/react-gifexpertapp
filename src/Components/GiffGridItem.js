import React from 'react'

export const GiffGridItem = ({ title, url }) => {

    // console.log({ id, title, url });
    return (
        <div className = 'card animate__animated animate__bounce'>
            <img src={url} alt={title} /> {/*Se establece la fuente y algún otro dato como el título*/}
            <p>{ title }</p>
        </div>
    )
}

import React from 'react'

export default function Food({detailFood}) {
    
    return (
        <div className="container mt-5">
            <div className="container mt-3">
                <h1>{detailFood.name}</h1>
            </div>
            
            <div className="container mt-3">
                <h4>Tarif </h4><p>{detailFood.recipe}</p>
            </div>

            <div className="container mt-3">
                <h4>Malzemeler </h4><p>{detailFood.ingredients}</p>
                <hr style={{ color: "red", backgroundColor: "black", height: 2 }} />
            </div> 
        </div>
    )
}

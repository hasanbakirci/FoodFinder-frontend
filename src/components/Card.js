import React from 'react'
import { useHistory } from 'react-router';

export default function Card(props) {
    
    const history = useHistory()
    function _handlerClickCard(value){
        history.push(`/detail/${value}`)
        console.log(value)
    }

    return (
        <div className="container mt-2">
            {
                props.foods.map(food => (
                    <div className="card w-75, justify-content-center border border-primary mt-1" key={food.id}>
                        <div className="card-body" onClick={() => _handlerClickCard(food.id)}>
                            <h5 className="card-title"> {food.name} </h5>
                            <p className="card-text">Eklenme tarihi: {food.createdAt.substring(0,10)}</p>
                            <p className="card-text">Tür: {food.categoryName}</p>
                        </div>
                    </div>
                ))
            }   
        </div>
        
    )
}

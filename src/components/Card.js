import React from 'react'
import { useHistory } from 'react-router';

export default function Card(props) {
    
    const history = useHistory()
    function _handlerClickCard(value){
        history.push(`/detail/${value}`)
        console.log(value)
    }

    return (
        <div className="container mt-4">
            {
                props.foods.map(food => (
                       <div className="card col-md-6 mb-3 mx-auto" style={{backgroundColor : '#ecf0f1'}}key={food.id} onClick={() => _handlerClickCard(food.id)}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={food.imageUrl} className="img-thumbnail fix" alt={food.imageUrl}
                                 style={{width: 220,height: 200}}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{food.name}</h5>
                                    <p className="card-text">Tür: {food.categoryName}</p>
                                    <p className="card-text"><small className="text-muted">Eklenme tarihi: {food.createdAt.substring(0,10)}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>       
                ))
            }   
        </div>
        
    )
}

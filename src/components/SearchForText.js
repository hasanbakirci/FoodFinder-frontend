import React from 'react'

export default function SearchForText(props) {

    function _handleEnterKey(e){
        if(e.key === 'Enter'){
            console.log(e.target.value)
            props.search(e.target.value)
        }}
        
    return (
        <div className="container col-md-4 mx-auto mt-4">
            <input type="text" className="form-control " id="mesaj" placeholder="Veri bekleniyor.."
                onKeyPress={(e) => _handleEnterKey(e)} />
        </div>
    )
}

import React from 'react'

export default function Search(props) {

    function _handleChangeSelected(value){
        props.selected(value)
    }


    function _handleEnterKey(e){
        if(e.key === 'Enter'){
            console.log(e.target.value)
            props.search(e.target.value)
        }
    }

    
    return (
        <div className="container col-md-12 mx-auto mt-4">   

            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"
                 onClick={() => _handleChangeSelected('name')}/>
                <label className="btn btn-outline-primary" for="btnradio1">Türe göre</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
                onClick={() => _handleChangeSelected('ingredients')}/>
                <label className="btn btn-outline-primary" for="btnradio2">Malzemelere göre</label>
            </div>


            <div className="container col-md-4 mx-auto mt-4">
                <input type="text" className="form-control " id="mesaj" placeholder="Veri bekleniyor.."
                                 onKeyPress={(e) => _handleEnterKey(e)} />
            </div>
        </div>
    )
}

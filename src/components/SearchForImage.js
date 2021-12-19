import React from 'react'

export default function SearchForImage(props) {
    function _handleFile(e){
        let file = e.target.files[0]
        console.log(file)
        props.image(file)
        
    }
    return (
        <div className="container col-md-4 mx-auto mt-4">
           <div className="input-group">
            <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                onChange={e => _handleFile(e)}
            />
            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04" onClick={e => props.postImage()}>Ara</button>
        </div> 
        </div>
        
    )
}

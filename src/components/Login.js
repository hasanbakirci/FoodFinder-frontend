import React from 'react'

export default function Login({emailAdress, setEmailAdress, password, setPassword,login,useStatus}) {

    return (
        <div className="container mt-5">
                <form className="form-inline justify-content-sm-between">
                    <div className="form-group mb-2">
                        <input type="text" readonly className="form-control form-control-sm" id="staticEmail2" placeholder="Email"
                            value={emailAdress} onChange= {e => setEmailAdress(e.target.value)} />
                    </div>
                    <div className="form-group mb-2">
                        <input type="password" className="form-control form-control-sm float-right" id="inputPassword2" placeholder="Password"
                            value={password} onChange= {e => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group mb-2">
                        <button type="button" className="btn btn-primary btn-sm float-right"
                            onClick= {login}
                        >Login</button>
                        <div className="form-group mt-3">
                            <p>{useStatus.toString()}</p>
                        </div>
        
                    </div>
                </form>  
            </div>
    )
}
